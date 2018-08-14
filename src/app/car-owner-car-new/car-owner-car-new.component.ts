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
  theDate: Date;
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

  //add new vehicle with the user entered values
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
      case "Escape":
        newVehicle.numSeats = 5;
        newVehicle.length = 178;
        newVehicle.width = 75;
        newVehicle.height = 66;
        newVehicle.weight = 3560;
        break;
      case "Lancer":
        newVehicle.numSeats = 5;
        newVehicle.length = 179;
        newVehicle.width = 69;
        newVehicle.height = 59;
        newVehicle.weight = 3461;
        break;
      default:
        newVehicle.numSeats = 5;
        newVehicle.length = 180;
        newVehicle.width = 70;
        newVehicle.height = 60;
        newVehicle.weight = 4000;
        break;
    }
    newVehicle.owner = this.ownerPrefix + this.ownerID;
    if(this.theDate==undefined||this.theDate==null){
      this.displayMessage = "Insurance expiry required";
    }
    else {
      newVehicle.insurance = this.theDate.toDateString().substring(4);
      newVehicle.status = "Active";

      this.restService.postTo(this.asset, newVehicle).subscribe(data => {
        this.status = data;
        this.router.navigate(['car-owner']);
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
