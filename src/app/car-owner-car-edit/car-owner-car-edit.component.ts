import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-car-owner-car-edit',
  templateUrl: './car-owner-car-edit.component.html',
  styleUrls: ['./car-owner-car-edit.component.css']
})
export class CarOwnerCarEditComponent implements OnInit {
  vehicleOwner: string = "James Miller";
  vehicleVIN: string = "1HGCN41JXMN109186";
  vehicleMake: string;
  vehicleModel: string;
  vehicleLicense: string;
  vehicleColour: string;
  vehicleInsurance: string = "534573";

  ownerID: string;
  ownerName: string;
  vinNumber: any = undefined;
  myVehicle: Vehicle = new Vehicle();
  newVehicle: Vehicle = new Vehicle();
  theDate: Date;
  displayMessage: string = 'undefined';
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";
  constructor(private restService: RestService, private routerLink: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //use the email from local storage to fetch current user's credentials
    this.restService.getAllFrom("carOwner").subscribe(data => {
      data.forEach(person => {
        if (person.email == window.localStorage[0]) {
          this.ownerID = person.ownerId;
          this.ownerName = person.firstName + " " + person.lastName;

          this.getVehicle();
        }
      })
    });
  }

  //fetch vehicle using the desired ID
  getVehicle() {
    this.routerLink.queryParams.subscribe(params => {
      this.vinNumber = params["ID"];
      this.restService.getAllFrom("vehicle").subscribe(data => {
        data.forEach(vehicle1 => {
          if (vehicle1.VIN == this.vinNumber) {
            this.myVehicle = vehicle1;
          }
        })
      });
    });
  }

  //edits the members of the given vehicle asset
  editCar() {
    this.myVehicle.insurance = this.theDate.toDateString().substring(4);
    this.myVehicle.VIN = ""; // Workaround for an error.
    this.restService.editAsset("vehicle", this.myVehicle.VIN, JSON.stringify(this.myVehicle)).subscribe(
      (data) => {
        this.displayMessage = "Success, vehicle information has been updated.";
      },
      (error) => {
        console.log(error);
        this.displayMessage = "Something went wrong, please try again."
      }
    )
  }

}
