import { Manufacturer } from './../models/manufacturer';
import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Router } from '../../../node_modules/@angular/router';
import { CarOwner } from '../models/car-owner';
import { PoliceOfficer } from '../models/police-officer';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  newCarOwner: CarOwner = new CarOwner();
  newManufacturer: Manufacturer = new Manufacturer();
  newPolice: PoliceOfficer = new PoliceOfficer();
  inEmail: string;
  inFirstName: string;
  inLastName: string;
  inPassword: string;
  status: string;
  constructor(private restService: RestService, public router: Router) { }

  ngOnInit() {
  }

  createUser(mySelector: string){
    switch(mySelector){
      case "1":
        this.newCarOwner.email = this.inEmail;
        this.newCarOwner.firstName = this.inFirstName;
        this.newCarOwner.lastName = this.inLastName;
        this.newCarOwner.pass = this.inPassword;
        this.newCarOwner.ownerId = (Math.random()*100000000000000000).toString();
        this.restService.postTo("carOwner", this.newCarOwner).subscribe(data=>{
          window.localStorage[0] = this.inEmail;
          this.router.navigate(['/car-owner']);
          this.status=data;
        });
        break;
      case "2":
        this.newManufacturer.email = this.inEmail;
        this.newManufacturer.name = this.inFirstName;
        this.newManufacturer.pass = this.inPassword;
        this.newManufacturer.manId = (Math.random()*100000000000000000).toString();
        this.restService.postTo("manufacturer", this.newManufacturer).subscribe(data=>{
          window.localStorage[0] = this.inEmail;
          this.router.navigate(['/manufacturer']);
          this.status=data;
        });
        break;
      case "3":
        this.newPolice.email = this.inEmail;
        this.newPolice.firstName = this.inFirstName;
        this.newPolice.lastName = this.inLastName;
        this.newPolice.pass = this.inPassword;
        this.newPolice.badgeNumber = (Math.random()*100000000000000000).toString();
        this.restService.postTo("policeOfficer", this.newPolice).subscribe(data=>{
          window.localStorage[0] = this.inEmail;
          this.router.navigate(['/police']);
          this.status=data;
        });
        break;
      }
    
  }

}
