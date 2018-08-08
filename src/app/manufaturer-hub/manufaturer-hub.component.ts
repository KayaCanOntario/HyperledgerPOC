import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufaturer-hub',
  templateUrl: './manufaturer-hub.component.html',
  styleUrls: ['./manufaturer-hub.component.css']
})
export class ManufaturerHubComponent implements OnInit {
  manuID: string;
  manuName: string;
  constructor(private restService: RestService) { }

  ngOnInit() {

    this.restService.getAllFrom("manufacturer").subscribe(data => {

      //find the manufacturer name and ID from the API, using the email in local storage to locate them
      data.forEach(person1 => {
        if (person1.email == window.localStorage[0]) {
          this.manuID = person1.manId;
          this.manuName = person1.name;
        }
      })

    });

  }

}
