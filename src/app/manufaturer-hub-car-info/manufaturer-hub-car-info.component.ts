import { Component, OnInit } from '@angular/core';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-manufaturer-hub-car-info',
  templateUrl: './manufaturer-hub-car-info.component.html',
  styleUrls: ['./manufaturer-hub-car-info.component.css']
})
export class ManufaturerHubCarInfoComponent implements OnInit {
  manuName: string;
  manuID: string;
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
