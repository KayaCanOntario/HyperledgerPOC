import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-owner-hub',
  templateUrl: './car-owner-hub.component.html',
  styleUrls: ['./car-owner-hub.component.css']
})
export class CarOwnerHubComponent implements OnInit {
  // Owner ID and Owner Prefix. Used when making calls to the API.
  ownerID : string;
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";
<<<<<<< HEAD
  tableData = [];
=======

  // Table which will be populated with the data fetched from the API.
  tableData =[];

  // Owner name which will be fetched from the API.
>>>>>>> c7acdcb835386c86b5278c574628729ac97d84cb
  ownerName: string;


  constructor(private restService: RestService) { }

  ngOnInit() {
    // Make a call to the API to fetch user information.
    this.restService.isWorking();
    this.restService.getAllFrom("carOwner").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.ownerID = person1.ownerId;
        }
      })

      data.forEach(person2 =>{
        if(person2.ownerId == this.ownerID)
        {
          this.ownerName = person2.firstName + " " + person2.lastName;
        }
      })
    });

    // Make a call to the API to fetch all vehicles registered for this user.
    this.restService.getAllFrom("vehicle").subscribe(data=>{
      data.forEach(vehic =>{
        if(vehic.owner == this.ownerPrefix + this.ownerID)
        {
          this.tableData.push(vehic);
        }
      })
    });
    
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