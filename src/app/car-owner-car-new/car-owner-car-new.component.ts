import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-owner-car-new',
  templateUrl: './car-owner-car-new.component.html',
  styleUrls: ['./car-owner-car-new.component.css']
})
export class CarOwnerCarNewComponent implements OnInit {

  // Owner ID and Owner Prefix. Used when making calls to the API.
  ownerID: string;
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";

  // Owner name which will be fetched from the API.
  ownerName: string;

  status: string;
  displayMessage: string = "undefined";
  vehicle: Vehicle = new Vehicle();
  asset: string = "vehicle";
  constructor(public router: Router, private restService: RestService) { }

  ngOnInit() {
    
    this.restService.getAllFrom("carOwner").subscribe(data => {
      data.forEach(person => {
        if (person.email == window.localStorage[0]) {
          this.ownerID = person.ownerId;
          this.ownerName = person.firstName + " " + person.lastName;
        }
      })
    });

  }

  addCar(newVehicle: Vehicle) {
    this.displayMessage = "Processing...";
    newVehicle.owner = this.ownerPrefix + this.ownerID;
    newVehicle.insurance = "Insured";
    newVehicle.status = "Active";
    //console.log(newVehicle);

    this.restService.postTo(this.asset, newVehicle).subscribe(data => {
      this.status=data;
      this.router.navigate(['car-owner']);
    }, error => {
      if (newVehicle.VIN == null || newVehicle.VIN == undefined){
        this.displayMessage = "VIN field required";
      }
      else if (newVehicle.make == null || newVehicle.make == undefined){
        this.displayMessage = "Make field required";
      }
      else if (newVehicle.model == null || newVehicle.model == undefined){
        this.displayMessage = "Model field required";
      }
      else if (newVehicle.plate == null || newVehicle.plate == undefined){
        this.displayMessage = "License Plate field required";
      }
      else if (newVehicle.colour == null || newVehicle.colour == undefined){
        this.displayMessage = "Colour field required";
      }
      //only possible error if vehicle object is sufficiently populated, is a duplicate VIN
      else{
        this.displayMessage = "Vehicle with that VIN already exists";
      }
    });

  }
}
