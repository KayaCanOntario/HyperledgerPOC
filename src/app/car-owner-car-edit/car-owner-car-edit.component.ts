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
  vehicleMake: string = "Chevy";
  vehicleModel: string = "Nova";
  vehicleLicense: string = "BTRD 094";
  vehicleColour: string = "Blue";
  vehicleInsurance: string = "534573";

  ownerID: string;
  ownerName: string;
  vinNumber: any = undefined;
  myVehicle: Vehicle;
  newVehicle: Vehicle=new Vehicle();
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";
  constructor(private restService: RestService,  private routerLink: ActivatedRoute, private router: Router) { }

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

  editCar(newVehicle: Vehicle) {
    //this.displayMessage = "Processing...";
    newVehicle.owner = this.ownerPrefix + this.ownerID;
    newVehicle.insurance = "Insured";
    newVehicle.status = "Active";
    //console.log(newVehicle);

    //delete old car
    this.restService.postTo("vehicle", newVehicle).subscribe(data => {
      //routerlink
    });

  }


}
