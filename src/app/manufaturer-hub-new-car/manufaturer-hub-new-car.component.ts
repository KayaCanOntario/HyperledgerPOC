import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-manufaturer-hub-new-car',
  templateUrl: './manufaturer-hub-new-car.component.html',
  styleUrls: ['./manufaturer-hub-new-car.component.css']
})
export class ManufaturerHubNewCarComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();
  status: any;
  asset: string = "vehicle";
  constructor(private restService: RestService) { }

  ngOnInit() {
  }

  addCar(newVehicle: Vehicle)
  {

    newVehicle.owner = "resource:org.example.scottpoc.carOwner#1234";
    newVehicle.$class = "org.example.scottpoc.vehicle";
    console.log(newVehicle);
    this.status = this.restService.postTo(this.asset, newVehicle);
    console.log(this.status);
  }

}
