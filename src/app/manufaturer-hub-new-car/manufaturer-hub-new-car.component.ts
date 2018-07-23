import { Vehicle } from './../models/vehicle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufaturer-hub-new-car',
  templateUrl: './manufaturer-hub-new-car.component.html',
  styleUrls: ['./manufaturer-hub-new-car.component.css']
})
export class ManufaturerHubNewCarComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();
  constructor() { }

  ngOnInit() {
  }

  addCar(newVehicle: Vehicle)
  {

  }

}
