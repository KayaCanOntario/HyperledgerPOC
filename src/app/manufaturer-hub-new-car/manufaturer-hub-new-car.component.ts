import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  


@Component({
  selector: 'app-manufaturer-hub-new-car',
  templateUrl: './manufaturer-hub-new-car.component.html',
  styleUrls: ['./manufaturer-hub-new-car.component.css']
})
export class ManufaturerHubNewCarComponent implements OnInit {
  vehicle: Vehicle = new Vehicle();
  status: any;
  asset: string = "vehicle";
  constructor(private restService: RestService, public router: Router) { }

  ngOnInit() {
  }

  addCar(newVehicle: Vehicle)
  {
    newVehicle.owner = "resource:org.example.scottpoc.carOwner#1234";
    newVehicle.insurance = " ";
    newVehicle.status = "Active";
    this.restService.postTo(this.asset, newVehicle).subscribe(data=>{
      this.status=data;
      this.router.navigate(['manufacturer']);
    });

  }

}
