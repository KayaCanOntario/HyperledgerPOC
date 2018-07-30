import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-owner-hub',
  templateUrl: './car-owner-hub.component.html',
  styleUrls: ['./car-owner-hub.component.css']
})
export class CarOwnerHubComponent implements OnInit {
  // Owner ID and Owner Prefix. Used when making calls to the API.
  ownerID : string;
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";

  // Table which will be populated with the data fetched from the API.
  tableData =[];

  // Owner name which will be fetched from the API.
  ownerName: string;


  constructor(private restService: RestService, public router: Router) { }

  ngOnInit() {

    this.ownerID = window.localStorage[1];
    this.ownerName = window.localStorage[2];

    // If user is not logged in, go back to homepage.
    if (!this.ownerID || this.ownerID == '' || this.ownerID == null) {
      this.router.navigate(['/']);
    }


    // Make a call to the API to fetch user information.
    this.restService.isWorking();

    // Make a call to the API to fetch all vehicles registered for this user.
    this.restService.getAllFrom("vehicle").subscribe(data=>{
      data.forEach(vehic =>{
        if(vehic.owner == this.ownerPrefix + this.ownerID)
        {
          this.tableData.push(vehic);
        }
      })
    });
       
  }
}