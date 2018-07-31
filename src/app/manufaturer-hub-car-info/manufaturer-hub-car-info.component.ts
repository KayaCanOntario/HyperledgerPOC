import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { RouterLink, ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-manufaturer-hub-car-info',
  templateUrl: './manufaturer-hub-car-info.component.html',
  styleUrls: ['./manufaturer-hub-car-info.component.css']
})
export class ManufaturerHubCarInfoComponent implements OnInit {
  manuName: string;
  manuID: string;
  tableData = []
  vehicleVIN: string;
  constructor(private routerLink: ActivatedRoute, private restService: RestService) { }

  ngOnInit() {
    this.restService.getAllFrom("manufacturer").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.manuID = person1.manId;
          this.manuName = person1.name;
        }
      })
    });
    this.getData();
  }

  getData()
  {
    this.routerLink.queryParams.subscribe(params => {
      const myID = params["ID"];
      this.vehicleVIN = myID;
      this.restService.isWorking();

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
