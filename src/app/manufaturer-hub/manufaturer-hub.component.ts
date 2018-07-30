import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufaturer-hub',
  templateUrl: './manufaturer-hub.component.html',
  styleUrls: ['./manufaturer-hub.component.css']
})
export class ManufaturerHubComponent implements OnInit {
  manuID: string;
  manuName: string;
  constructor(private restService: RestService, private router: Router) { }

  ngOnInit() {
    this.manuID = window.localStorage[1];
    this.manuName = window.localStorage[2];

    if (!this.manuID || this.manuID == '' || this.manuID == null || this.manuID == 'null') {
      this.router.navigate(['/']);
    }
  }

  signOut() {
    window.localStorage[1] = null;
    window.localStorage[2] = null;

    this.router.navigate(['/']);
  }

}
