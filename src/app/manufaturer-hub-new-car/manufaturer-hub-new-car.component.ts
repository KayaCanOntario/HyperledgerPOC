import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { RouterLink, ActivatedRoute, Router } from '../../../node_modules/@angular/router';

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
  defaultMake: string = undefined;
  defaultModel:string = undefined;
  defaultColour:string = undefined;
  constructor(private restService: RestService, private routerLink: ActivatedRoute, public router: Router) { }

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
    this.routerLink.queryParams.subscribe(params => {
      this.defaultMake = params["make"];
      this.defaultModel = params["model"];
      this.defaultColour = params["colour"];
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
