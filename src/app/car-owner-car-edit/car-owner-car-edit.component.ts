import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { RouterLink, ActivatedRoute, Router } from '../../../node_modules/@angular/router'; 
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-car-owner-car-edit',
  templateUrl: './car-owner-car-edit.component.html',
  styleUrls: ['./car-owner-car-edit.component.css']
})
export class CarOwnerCarEditComponent implements OnInit {
  vehicleOwner: string = "James Miller";
  vehicleVIN: string = "1HGCN41JXMN109186";
  vehicleMake: string = "Chevy";
  vehicleModel: string = "Nova";
  vehicleLicense: string = "BTRD 094";
  vehicleColour: string = "Blue";
  vehicleInsurance: string = "534573";

  ownerID: string;
  ownerName: string;
  vinNumber: any = undefined;
  myVehicle: Vehicle;
  constructor(private restService: RestService,  private routerLink: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.ownerID = window.localStorage[1];
    this.ownerName = window.localStorage[2];

    // If user is not logged in, go back to homepage.
    if (!this.ownerID || this.ownerID == '' || this.ownerID == null || this.ownerID == "null") {
      this.router.navigate(['/']);
    }

    this.routerLink.queryParams.subscribe(params => {
      this.vinNumber = params["ID"];
      this.restService.getAllFrom("vehicle").subscribe(data => {
        data.forEach(vehicle1 => {
          if(vehicle1.VIN == this.vinNumber)
          {
            this.myVehicle = vehicle1;

          }
        })
      });
    });
  }


  signOut() {
    window.localStorage[1] = null;
    window.localStorage[2] = null;

    this.router.navigate(['/']);
  } 
}
