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
  manuName: string;
  manuID: string;
  constructor(private restService: RestService, public router: Router) { }

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
