import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police-hub-view-vehicles',
  templateUrl: './police-hub-view-vehicles.component.html',
  styleUrls: ['./police-hub-view-vehicles.component.css']
})
export class PoliceHubViewVehiclesComponent implements OnInit {
    officerName: string;
    badgeID: string;
    tableData = [];
    constructor(private restService: RestService) { }
  
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

      this.restService.getAllFrom("vehicle").subscribe(data=>{
        data.forEach(vehicle1 =>{
          if(vehicle1.status != "In Stock")
          {
            this.tableData.push(vehicle1)
          }
        })
      });
    }

}
