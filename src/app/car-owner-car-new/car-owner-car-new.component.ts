import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Vehicle } from './../models/vehicle';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-car-owner-car-new',
  templateUrl: './car-owner-car-new.component.html',
  styleUrls: ['./car-owner-car-new.component.css']
})
export class CarOwnerCarNewComponent implements OnInit {
  status: string;
  ownerID: string;
  ownerName: string;
  vehicle: Vehicle = new Vehicle();
  asset: string = "vehicle";
  constructor(public router: Router, private restService: RestService) { }

  ngOnInit() {
    console.log(window.localStorage[0]);
    this.restService.isWorking();
    
    this.restService.getAllFrom("carOwner").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.ownerID = person1.ownerId;
        }
      })

      data.forEach(person2 =>{
        if(person2.ownerId == this.ownerID)
        {
          this.ownerName = person2.firstName + " "+ person2.lastName;
        }
      })
      
    });
  }

  addCar(newVehicle: Vehicle)
  {
    newVehicle.owner = "resource:org.example.scottpoc.carOwner#" + this.ownerID;
    newVehicle.insurance = "Insured";
    newVehicle.status = "Active";
    console.log(newVehicle);
    this.restService.postTo(this.asset, newVehicle).subscribe(data=>{
      //this.status=data;
      //this.router.navigate(['manufacturer']);
    });
  }
}