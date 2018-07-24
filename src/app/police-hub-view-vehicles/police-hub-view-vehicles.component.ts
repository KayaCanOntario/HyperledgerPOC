import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-police-hub-view-vehicles',
  templateUrl: './police-hub-view-vehicles.component.html',
  styleUrls: ['./police-hub-view-vehicles.component.css']
})
export class PoliceHubViewVehiclesComponent implements OnInit {


    tableData = null;
    constructor(private restService: RestService) { }
  
    ngOnInit() {
      this.restService.isWorking();
      this.restService.getAllFrom("vehicle").subscribe(data=>{
        this.tableData = data;
        console.log(data);
      });
    }

}
