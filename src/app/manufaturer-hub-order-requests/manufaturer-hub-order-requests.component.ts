import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-manufaturer-hub-order-requests',
  templateUrl: './manufaturer-hub-order-requests.component.html',
  styleUrls: ['./manufaturer-hub-order-requests.component.css']
})
export class ManufaturerHubOrderRequestsComponent implements OnInit {
  manuID: string;
  manuName: string;
  tableData = [];
  ownerPrefix = "resource:org.example.scottpoc.carOwner#";
  constructor(private restService: RestService, private location: Location) { }

  ngOnInit() {

    //get manufacturer name and id from the email stored in local storage
    this.restService.getAllFrom("manufacturer").subscribe(data => {
      data.forEach(person1 => {
        if (person1.email == window.localStorage[0]) {
          this.manuID = person1.manId;
          this.manuName = person1.name;
        }
      })
    });

    //get all vehicles that have beeen requested and fetch their appropriate owner name
    this.restService.getAllFrom("vehicle").subscribe(data => {
      data.forEach(vehic => {
        if (vehic.status == "Request" && vehic.make == this.manuName) {
          this.restService.getAllFrom("carOwner").subscribe(data => {
            data.forEach(vehic2 => {
              if (this.ownerPrefix + vehic2.ownerId == vehic.owner) {
                vehic.ownerDisplayName = vehic2.firstName + " " + vehic2.lastName;
              }
            })
          });
          this.tableData.push(vehic);
        }
      })
    });

  }

  navigateBack() {
    this.location.back();
  }

}
