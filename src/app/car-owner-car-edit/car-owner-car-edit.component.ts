import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Vehicle } from '../models/vehicle';
import { Location } from '@angular/common';

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
  constructor(private restService: RestService, private routerLink: ActivatedRoute, private router: Router, private location: Location) { }

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
            this.theDate = new Date(vehicle1.insurance);
          }
        })
      });
    });
  }

  //edits the members of the given vehicle asset
  editCar() {
    this.displayMessage = "Processing...";
    if(this.theDate==null||this.theDate==undefined)
    {
      this.displayMessage = "Insurance Expiry Required";
    }
    else {
      this.myVehicle.insurance = this.theDate.toDateString().substring(4);
      this.myVehicle.VIN = ""; // Workaround for an error.
      this.restService.editAsset("vehicle", this.vinNumber, JSON.stringify(this.myVehicle)).subscribe(
        (data) => {
          this.displayMessage = "Success, vehicle information has been updated.";
        },
        (error) => {
          if (this.myVehicle.VIN == null || this.myVehicle.VIN == undefined) {
            this.displayMessage = "VIN field required";
          }
          else if (this.myVehicle.make == null || this.myVehicle.make == undefined) {
            this.displayMessage = "Make field required";
          }
          else if (this.myVehicle.model == null || this.myVehicle.model == undefined) {
            this.displayMessage = "Model field required";
          }
          else if (this.myVehicle.plate == null || this.myVehicle.plate == undefined) {
            this.displayMessage = "License Plate field required";
          }
          else if (this.myVehicle.colour == null || this.myVehicle.colour == undefined) {
            this.displayMessage = "Colour field required";
          }
        })
      }
    
  }

  navigateBack() {
    this.location.back();
  }

}
