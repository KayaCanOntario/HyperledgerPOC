import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-manufaturer-hub-order-requests',
  templateUrl: './manufaturer-hub-order-requests.component.html',
  styleUrls: ['./manufaturer-hub-order-requests.component.css']
})
export class ManufaturerHubOrderRequestsComponent implements OnInit {
  manuID: string;
  manuName: string;
  constructor(private restService: RestService) { }

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

}
