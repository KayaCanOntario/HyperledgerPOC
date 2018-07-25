import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  selector: string;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigatePage(mySelector: string)
  {
    console.log(mySelector);
    switch(mySelector)
    {
      case "1":
        this.router.navigate(['/car-owner']);
        break;
      case "3":
        this.router.navigate(['/manufacturer']);
        break;
      case "4":
        this.router.navigate(['/police']);
        break;
    }
    
  }

}
