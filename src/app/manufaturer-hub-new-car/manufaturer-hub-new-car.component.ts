import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

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
  constructor(private restService: RestService, private routerLink: ActivatedRoute, public router: Router, private location: Location) { }

  ngOnInit() {
    this.restService.getAllFrom("manufacturer").subscribe(data => {
      data.forEach(person1 => {
        if (person1.email == window.localStorage[0]) {
          this.manuID = person1.manId;
          this.manuName = person1.name;
          this.vehicle.make = this.manuName;
        }
      })
    });
    
    this.routerLink.queryParams.subscribe(params => {
      if (params["VIN"]) {
        this.flag = true;
      }
      this.vehicle.model = params["model"];
      this.vehicle.colour = params["colour"];
      this.vehicle.plate = params["plate"];
      this.vehicle.VIN = params["VIN"];
      this.vehicle.owner = "resource:org.example.scottpoc.carOwner#" + params["owner"];
    });
  }

  addCar(newVehicle: Vehicle) {
    this.displayMessage = "Processing...";
    switch(newVehicle.model)
    {
      case "Odyssey":
        newVehicle.numSeats = 8;
        newVehicle.length = 203;
        newVehicle.width = 68;
        newVehicle.height = 70;
        newVehicle.weight = 4354;
        break;
      case "Accord":
        newVehicle.numSeats = 5;
        newVehicle.length = 192;
        newVehicle.width = 73;
        newVehicle.height = 57;
        newVehicle.weight = 3131;
        break;
      case "S":
      case "Model S":
        newVehicle.numSeats = 5;
        newVehicle.length = 196;
        newVehicle.width = 77;
        newVehicle.height = 57;
        newVehicle.weight = 4647;
        break;
      case "X":
      case "Model X":
        newVehicle.numSeats = 5;
        newVehicle.length = 198;
        newVehicle.width = 82;
        newVehicle.height = 66;
        newVehicle.weight = 4980;
        break;
      case "3":
      case "Model S":
        newVehicle.numSeats = 5;
        newVehicle.length = 185;
        newVehicle.width = 73;
        newVehicle.height = 56;
        newVehicle.weight = 4647;
        break;
      case "Nova":
        newVehicle.numSeats = 5;
        newVehicle.length = 189;
        newVehicle.width = 72;
        newVehicle.height = 54;
        newVehicle.weight = 4440;
        break;
      case "Trailblazer":
        newVehicle.numSeats = 8;
        newVehicle.length = 180;
        newVehicle.width = 71;
        newVehicle.height = 53;
        newVehicle.weight = 4632;
        break;
    }
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

  navigateBack(){
    this.location.back();
  }

}
