import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private restService: RestService) { }

  ngOnInit() {
    this.restService.isWorking();
    this.restService.getAllTraders();
  }

}
