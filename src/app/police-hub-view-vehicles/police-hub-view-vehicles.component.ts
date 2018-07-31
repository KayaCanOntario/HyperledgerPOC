import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police-hub-view-vehicles',
  templateUrl: './police-hub-view-vehicles.component.html',
  styleUrls: ['./police-hub-view-vehicles.component.css']
})
export class PoliceHubViewVehiclesComponent implements OnInit {


    tableData = [];
    constructor(private restService: RestService) { }
  
    ngOnInit() {
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
