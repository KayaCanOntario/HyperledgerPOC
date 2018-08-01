import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { AssetTX } from '../models/asset-tx';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-police-hub-report',
  templateUrl: './police-hub-report.component.html',
  styleUrls: ['./police-hub-report.component.css']
})
export class PoliceHubReportComponent implements OnInit {

  badgeID: string;
  officerName: string;
  selector: string = "undefined";
  inputVIN: string;
  status: string;
  transaction: AssetTX = new AssetTX();
  txType: string;
  constructor(private restService: RestService, public router: Router) { }

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

  fileReport(mySelector: string, myVIN: string)
  {
    switch(mySelector)
    {
      case"1":
        this.txType = "markAsSuspicious";
        this.transaction.$class = "org.example.scottpoc.markAsSuspicious";
        break;
      case"2":
        this.txType = "markAsStolen";
        this.transaction.$class = "org.example.scottpoc.markAsStolen";
      break;
    }
    
    this.transaction.asset = "resource:org.example.scottpoc.vehicle#" + myVIN;
    this.restService.postTo(this.txType, this.transaction).subscribe(data=>{
      this.status=data;
      this.router.navigate(['/police']);
    });
  }

}
