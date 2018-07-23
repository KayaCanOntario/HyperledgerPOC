import { RestService } from './../rest.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zmock-data',
  templateUrl: './zmock-data.component.html',
  styleUrls: ['./zmock-data.component.css']
})
/*
* This component is responsible for generating the mock data for the Hyperleger network. 
* 
*/

export class ZmockDataComponent implements OnInit {
  carOwnerStatus: boolean = null;
  vehicleStatus: boolean = null;

  constructor(
    private restService: RestService, // This is used to make calls to the network API.
    private http: HttpClient) { }

  ngOnInit() {

    // Car Owner mock data. Makes a call to the network API, and it passes the mock
    // data stored the json file as the parameters. 
    this.getCarOwnerMockData().subscribe(data => {
      this.restService.postTo("carOwner", data).subscribe(
        (data) => {
          this.carOwnerStatus = true;
        },
        (error) => {
          this.carOwnerStatus = false;
        }
      );
    });

    // Vehicle mock data. Makes a call to the network API, and it passes the mock
    // data stored the json file as the parameters. 
    this.getVehicleMockData().subscribe(data => {
      this.restService.postTo("vehicle", data).subscribe(
        (data) => {
          this.vehicleStatus = true;
        },
        (error) => {
          this.vehicleStatus = false;
        }
      );
    });

    // this.restService.getAllFrom("carOwner");
  }

  getCarOwnerMockData() {
    return this.http.get("./assets/mock-data/carOwner.json");
  }

  getVehicleMockData() {
    return this.http.get("./assets/mock-data/vehicle.json");
  }
}
