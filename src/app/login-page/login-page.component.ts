import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  selector: string="undefined";
  inYourEmail: string;
  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  //navigate to the appropriate page depending on the option slected
  navigatePage(mySelector: string)
  {
    window.localStorage[0] = this.inYourEmail;
    //console.log(mySelector);
    switch(mySelector)
    {
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
    
  }

}
