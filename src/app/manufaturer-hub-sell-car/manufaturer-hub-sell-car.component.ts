import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manufaturer-hub-sell-car',
  templateUrl: './manufaturer-hub-sell-car.component.html',
  styleUrls: ['./manufaturer-hub-sell-car.component.css']
})
export class ManufaturerHubSellCarComponent implements OnInit {
  manuID: string;
  manuName: string;
  vehicleVIN: string;
  userID: string;
  vehicleAmount: string;
  displayMessage: string = "undefined";




  constructor(private restService: RestService, private routerLink: ActivatedRoute, public router: Router) { }

  ngOnInit() {

    //use the email in local storage, and use it to gain the user id and manufacturer name
    this.restService.getAllFrom("manufacturer").subscribe(data => {
      data.forEach(person1 => {
        if (person1.email == window.localStorage[0]) {
          this.manuID = person1.manId;
          this.manuName = person1.name;

        }
      })
    });


    // Fetch the params.
    this.routerLink.queryParams.subscribe(params => {
      this.vehicleVIN = params["ID"];
      if (this.vehicleVIN == null) {
        this.router.navigate(['/manufacturer']);
      }

    });
  }

  sellVehicle() {
    this.displayMessage = "undefined";

    // Checking to see if a user exists with the given 'userID'.
    this.restService.getAllFrom("carOwner").subscribe(data => {
      let found: boolean = false;
      data.forEach(person => {
        if (person.ownerId == this.userID) {
          found = true;
          this.changeVehicleProperties();
        }
      })
      if (!found) { // If no such user has been found.
        this.displayMessage = "No such user found. Please try again.";
      }
    });
  }

  //make appropriate changes to vehicle that need to be made for the sale of a vehicle
  //and edit the api to reflect this change
  changeVehicleProperties() {
    this.restService.getAllFrom("vehicle").subscribe(data => {
      data.forEach(vehicle => {
        if (vehicle.VIN == this.vehicleVIN) {
          vehicle.owner = "resource:org.example.scottpoc.carOwner#" + this.userID; // Vehicle owner is changed.
          vehicle.status = "Active"; // Vehicle status is changed.
          vehicle.insurance = "Not Insured";
          this.restService.editAsset("vehicle", vehicle.VIN, JSON.stringify(vehicle)).subscribe(
            (data) => {
              this.displayMessage = "Success, vehicle has been sold to the user.";
            },
            (error) => {
              this.displayMessage = "Something went wrong, please try again."
            }
          )
        }
      })
    });
  }
}