import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Vehicle } from '../models/vehicle';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manufacturer-hub-edit-car',
  templateUrl: './manufacturer-hub-edit-car.component.html',
  styleUrls: ['./manufacturer-hub-edit-car.component.css']
})
export class ManufacturerHubEditCarComponent implements OnInit {
  manuID: string;
  manuName: string;

  myVehicle: Vehicle = new Vehicle();
  vinNumber: string;
  displayMessage: string = 'undefined';

  constructor(private restService: RestService, private routerLink: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    //use the email in local storage, and use it to gain the user id an manufacturer name
    this.restService.getAllFrom("manufacturer").subscribe(data => {
      data.forEach(manu => {
        if (manu.email == window.localStorage[0]) {
          this.manuID = manu.manId;
          this.manuName = manu.name;

          this.getVehicle();
        }
      })
    })
  }

  getVehicle() {
    this.routerLink.queryParams.subscribe(params => {
      this.vinNumber = params["ID"];
      this.restService.getAllFrom("vehicle").subscribe(data => {
        data.forEach(vehicle => {
          if (vehicle.VIN == this.vinNumber) {
            this.myVehicle = vehicle;
          }
        })
      })
    })
  }

  editCar() {
    this.myVehicle.VIN = ""; // Workaround for an error.
    this.restService.editAsset("vehicle", this.vinNumber, JSON.stringify(this.myVehicle)).subscribe(
      (data) => {
        this.displayMessage = "Success, vehicle information has been update.";
      },
      (error) => {
        this.displayMessage = "Something went wrong, please try again.";
      }
    )
  }

}
