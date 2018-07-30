import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-manufaturer-hub-sell-car',
  templateUrl: './manufaturer-hub-sell-car.component.html',
  styleUrls: ['./manufaturer-hub-sell-car.component.css']
})
export class ManufaturerHubSellCarComponent implements OnInit {
  manuID: string;
  manuName: string;

  // Table which will be populated with the data fetched from the API.
  tableData =[];

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getAllFrom("manufacturer").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.manuID = person1.manId;
          this.manuName = person1.name;

          this.getStock();
        }
      })
    });
  }

  getStock() {
    this.restService.getAllFrom("vehicle").subscribe(data => {
      data.forEach(vehicle => {
        this.tableData.push(vehicle);
      });
    });
  }

}
