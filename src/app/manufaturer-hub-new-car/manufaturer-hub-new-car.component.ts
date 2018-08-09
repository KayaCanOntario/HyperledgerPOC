import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-manufaturer-hub-new-car',
  templateUrl: './manufaturer-hub-new-car.component.html',
  styleUrls: ['./manufaturer-hub-new-car.component.css']
})
export class ManufaturerHubNewCarComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();
  status: any;
  asset: string = "vehicle";
  manuName: string;
  manuID: string;
  defaultMake: string = undefined;
  defaultModel: string = undefined;
  defaultColour: string = undefined;
  displayMessage: string = "undefined";
  flag: boolean = false;
  constructor(private restService: RestService, private routerLink: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.restService.getAllFrom("manufacturer").subscribe(data => {
      data.forEach(person1 => {
        if (person1.email == window.localStorage[0]) {
          this.manuID = person1.manId;
          this.manuName = person1.name;
        }
      })
    });
    this.routerLink.queryParams.subscribe(params => {
      if (params["VIN"]) {
        this.flag = true;
      }
      this.vehicle.make = params["make"];
      this.vehicle.model = params["model"];
      this.vehicle.colour = params["colour"];
      this.vehicle.plate = params["plate"];
      this.vehicle.VIN = params["VIN"];
      this.vehicle.owner = "resource:org.example.scottpoc.carOwner#" + params["owner"];
    });
  }

  addCar(newVehicle: Vehicle) {
    this.displayMessage = "Processing...";
    if (this.flag) {
      newVehicle.status = "Active";
      newVehicle.insurance = "Not Insured";
      this.restService.editAsset("vehicle", newVehicle.VIN, JSON.stringify(newVehicle)).subscribe(
        (data) => {
          this.displayMessage = "Success, vehicle information has been updated.";
        },
        (error) => {
          console.log(error);
          this.displayMessage = "Something went wrong, please try again."
        }
      )

    }
    else {
      newVehicle.status = "In Stock";

      newVehicle.manufacturedBy = "resource:org.example.scottpoc.manufacturer#" + this.manuID;
      this.restService.postTo(this.asset, newVehicle).subscribe(data => {
        this.displayMessage = data;
        this.router.navigate(['/manufacturer/stock']);

      }, error => {
        if (newVehicle.VIN == null || newVehicle.VIN == undefined) {
          this.displayMessage = "VIN field required";
        }
        else if (newVehicle.make == null || newVehicle.make == undefined) {
          this.displayMessage = "Make field required";
        }
        else if (newVehicle.model == null || newVehicle.model == undefined) {
          this.displayMessage = "Model field required";
        }
        else if (newVehicle.plate == null || newVehicle.plate == undefined) {
          this.displayMessage = "License Plate field required";
        }
        else if (newVehicle.colour == null || newVehicle.colour == undefined) {
          this.displayMessage = "Colour field required";
        }
        //only possible error if vehicle object is sufficiently populated, is a duplicate VIN
        else {
          this.displayMessage = "Vehicle with that VIN already exists";
        }
      });
    }
  }

}
