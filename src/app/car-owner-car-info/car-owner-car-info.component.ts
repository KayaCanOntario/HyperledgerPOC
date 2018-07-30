import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { RouterLink, ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Vehicle } from '../models/vehicle';

@Component({
  selector: 'app-car-owner-car-info',
  templateUrl: './car-owner-car-info.component.html',
  styleUrls: ['./car-owner-car-info.component.css']
})
export class CarOwnerCarInfoComponent implements OnInit {
  ownerID: string;
  ownerName: string;
  tableData: any;
  vehicleVIN: string;
  constructor(private restService: RestService, private routerLink: ActivatedRoute, private router: Router) {
    
  }

  ngOnInit() {
    this.restService.getAllFrom("carOwner").subscribe(data => {
      data.forEach(person => {
        if (person.email == window.localStorage[0]) {
          this.ownerID = person.ownerId;
          this.ownerName = person.firstName + " " + person.lastName;
        }
      })
    });

    this.getData();
  }

  getData() {
    this.routerLink.queryParams.subscribe(params => {
      const myID = params["ID"];
      this.vehicleVIN = myID;
      this.restService.isWorking();

      this.restService.getAllFrom("carOwner").subscribe(data => {
        data.forEach(person1 => {
          if (person1.email == window.localStorage[0]) {
            this.ownerID = person1.ownerId;
            this.ownerName = person1.firstName + " " + person1.lastName;
          }
        })
      });
      this.restService.getAllFrom("vehicle").subscribe(data => {
        data.forEach(vehicle1 => {
          if(vehicle1.VIN == myID)
          {
            this.tableData = vehicle1;

          }
        })
      });
    });
  }

}
