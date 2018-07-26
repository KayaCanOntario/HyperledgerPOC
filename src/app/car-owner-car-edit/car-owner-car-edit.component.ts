import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-car-owner-car-edit',
  templateUrl: './car-owner-car-edit.component.html',
  styleUrls: ['./car-owner-car-edit.component.css']
})
export class CarOwnerCarEditComponent implements OnInit {
  vehicleOwner: string = "James Miller";
  vehicleVIN: string = "1HGCN41JXMN109186";
  vehicleMake: string = "Chevy";
  vehicleModel: string = "Nova";
  vehicleLicense: string = "BTRD 094";
  vehicleColour: string = "Blue";
  vehicleInsurance: string = "534573";

  ownerID: string ="1234";
  ownerName: string;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.isWorking();
    
    this.restService.getAllFrom("carOwner").subscribe(data=>{
      data.forEach(person =>{
        if(person.ownerId == this.ownerID)
        {
          this.ownerName = person.firstName + " "+ person.lastName;
        }
      })
      
    });
  }
}
