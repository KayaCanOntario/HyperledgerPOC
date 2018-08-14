import { AssetTX } from './../models/asset-tx';
import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-police-hub-impound',
  templateUrl: './police-hub-impound.component.html',
  styleUrls: ['./police-hub-impound.component.css']
})
export class PoliceHubImpoundComponent implements OnInit {
  transaction: AssetTX = new AssetTX();
  vinToBeImpounded: string;
  status: string;
  badgeID: string;
  officerName: string;
  displayMessage: string = "undefined";
  constructor(private restService: RestService , public router: Router) { }

  ngOnInit() {
    this.restService.getAllFrom("policeOfficer").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.badgeID = person1.badgeNumber;
          this.officerName = "Officer "+person1.firstName + " " + person1.lastName;
        }
      })
    });
  }

  impoundCar(thisVIN: string)
  {
    this.displayMessage="Processing...";
    this.transaction.$class = "org.example.scottpoc.impoundCar";
    this.transaction.asset = "resource:org.example.scottpoc.vehicle#" + thisVIN;
    this.restService.postTo("impoundCar", this.transaction).subscribe(data=>{
      this.status=data;
      this.router.navigate(['/police']);
    }, error=>{
      this.displayMessage = "Vehicle with that VIN does not exist";
    });
  }

}
