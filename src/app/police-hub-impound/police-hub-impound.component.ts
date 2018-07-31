import { ImpoundTX } from './../models/impound-tx';
import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { RouterLink, ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-police-hub-impound',
  templateUrl: './police-hub-impound.component.html',
  styleUrls: ['./police-hub-impound.component.css']
})
export class PoliceHubImpoundComponent implements OnInit {
  transaction: ImpoundTX = new ImpoundTX();
  vinToBeImpounded: string;
  status: string;
  badgeID: string;
  officerName: string;
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
    this.transaction.asset = "resource:org.example.scottpoc.vehicle#" + thisVIN;
    this.restService.postTo("impoundCar", this.transaction).subscribe(data=>{
      this.status=data;
      this.router.navigate(['/police']);
    });
  }

}
