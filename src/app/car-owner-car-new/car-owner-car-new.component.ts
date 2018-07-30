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
  ownerID : string;
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";

  // Owner name which will be fetched from the API.
  ownerName: string;

  status: string;

  vehicle: Vehicle = new Vehicle();
  asset: string = "vehicle";
  constructor(public router: Router, private restService: RestService) { }

  ngOnInit() {
    
    this.ownerID = window.localStorage[1];
    this.ownerName = window.localStorage[2];

    // If user is not logged in, go back to homepage.
    if (!this.ownerID || this.ownerID == '' || this.ownerID == null || this.ownerID == "null") {
      this.router.navigate(['/']);
    }

  }

  addCar(newVehicle: Vehicle)
  {
    newVehicle.owner = this.ownerPrefix + this.ownerID;
    newVehicle.insurance = "Insured";
    newVehicle.status = "Active";
    console.log(newVehicle);
    this.restService.postTo(this.asset, newVehicle).subscribe(data=>{
      //this.status=data;
      //this.router.navigate(['manufacturer']);
    });
  }

  signOut() {
    window.localStorage[1] = null;
    window.localStorage[2] = null;

    this.router.navigate(['/']);
  }
}