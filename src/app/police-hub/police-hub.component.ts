import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-police-hub',
  templateUrl: './police-hub.component.html',
  styleUrls: ['./police-hub.component.css']
})
export class PoliceHubComponent implements OnInit {
  badgeID: string;
  officerName: string;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.getAllFrom("policeOfficer").subscribe(data=>{
      data.forEach(person1 =>{
        if(person1.email == window.localStorage[0])
        {
          this.badgeID = person1.badgeNumber;
          this.officerName = "Officer "+person1.firstName + " " + person1.lastName;
        }
      })
    });
  }

}
