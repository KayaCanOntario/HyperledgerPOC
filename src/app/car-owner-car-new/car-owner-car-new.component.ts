import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-car-owner-car-new',
  templateUrl: './car-owner-car-new.component.html',
  styleUrls: ['./car-owner-car-new.component.css']
})
export class CarOwnerCarNewComponent implements OnInit {

  ownerID: string ="1234";
  ownerName: string;
  constructor(private restService: RestService) { }

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
}