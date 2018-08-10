import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RestService } from './../rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  selector: string = "undefined";
  inYourEmail: string;
  inYourPass: string;

  // Property that controls whether an invalid Login error is shown or not.
  showError: boolean = false;
  urlType: string;
  constructor(public router: Router, private restService: RestService, private location: Location) { }

  ngOnInit() {

  }

  //navigate to the appropriate page depending on the option slected
  navigatePage(mySelector: string) {

    switch (mySelector) {
      case "1":
        this.urlType = "carOwner";
        break;
      case "2":
        this.urlType = "manufacturer";
        break;
      case "3":
        this.urlType = "policeOfficer";
        break;
    }

    this.restService.getAllFrom(this.urlType).subscribe(data => {
      let userFound = false;

      data.forEach(person1 => {
        if (person1.email == this.inYourEmail && person1.pass == this.inYourPass) {
          userFound = true;
        }

        if (!userFound) {
          this.showError = true;
          return;
        }

        window.localStorage[0] = this.inYourEmail;

        switch (mySelector) {
          case "1":
            this.router.navigate(['/car-owner']);
            break;
          case "2":
            this.router.navigate(['/manufacturer']);
            break;
          case "3":
            this.router.navigate(['/police']);
            break;
        }
      })
    });
  }

  navigateBack(){
    this.location.back();
  }

}
