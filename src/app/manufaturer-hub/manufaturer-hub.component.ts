import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufaturer-hub',
  templateUrl: './manufaturer-hub.component.html',
  styleUrls: ['./manufaturer-hub.component.css']
})
export class ManufaturerHubComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {
   
  }

}
