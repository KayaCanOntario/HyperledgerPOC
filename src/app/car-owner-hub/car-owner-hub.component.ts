import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-owner-hub',
  templateUrl: './car-owner-hub.component.html',
  styleUrls: ['./car-owner-hub.component.css']
})
export class CarOwnerHubComponent implements OnInit {
  ownerID : string = "1234";
  ownerPrefix: string = "resource:org.example.scottpoc.carOwner#";
  tableData =[];
  ownerName: string;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.isWorking();
    this.restService.getAllFrom("vehicle").subscribe(data=>{
      data.forEach(vehic =>{
        if(vehic.owner == this.ownerPrefix + this.ownerID)
        {
          this.tableData.push(vehic);
        }
      })

    });
    this.restService.getAllFrom("carOwner").subscribe(data=>{
      data.forEach(person =>{
        if(person.ownerId == this.ownerID)
        {
          this.ownerName = person.firstName + " "+ person.lastName;
        }
      })
      
    });
  }
}