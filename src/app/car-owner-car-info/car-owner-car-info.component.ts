import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-car-owner-car-info',
  templateUrl: './car-owner-car-info.component.html',
  styleUrls: ['./car-owner-car-info.component.css']
})
export class CarOwnerCarInfoComponent implements OnInit {
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
