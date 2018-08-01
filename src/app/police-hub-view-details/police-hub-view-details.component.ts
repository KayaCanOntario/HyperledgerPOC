import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { RouterLink, ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-police-hub-view-details',
  templateUrl: './police-hub-view-details.component.html',
  styleUrls: ['./police-hub-view-details.component.css']
})
export class PoliceHubViewDetailsComponent implements OnInit {
  ownerID: string;
  ownerName: string;
  tableData: any;
  vehicleVIN: string;
  badgeID: string;
  officerName: string;
  constructor(private restService: RestService, private routerLink: ActivatedRoute, private router: Router) { }

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
    this.getData();
  }
  getData() {
    this.routerLink.queryParams.subscribe(params => {
      const myID = params["ID"];
      this.vehicleVIN = myID;
      this.restService.isWorking();

      this.restService.getAllFrom("carOwner").subscribe(data => {
        data.forEach(person1 => {
          if (person1.email == window.localStorage[0]) {
            this.ownerID = person1.ownerId;
            this.ownerName = person1.firstName + " " + person1.lastName;
          }
        })
      });
      this.restService.getAllFrom("vehicle").subscribe(data => {
        data.forEach(vehicle1 => {
          if(vehicle1.VIN == myID)
          {
            this.tableData = vehicle1;

          }
        })
      });
    });
  }

}

