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


  getVehicle() {
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
}
