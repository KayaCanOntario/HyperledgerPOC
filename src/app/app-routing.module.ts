import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CarOwnerHubComponent } from './car-owner-hub/car-owner-hub.component';
import { PoliceHubComponent } from './police-hub/police-hub.component';
import { ManufaturerHubComponent } from './manufaturer-hub/manufaturer-hub.component';
import { CarOwnerCarNewComponent } from './car-owner-car-new/car-owner-car-new.component';
import { ManufaturerHubNewCarComponent } from './manufaturer-hub-new-car/manufaturer-hub-new-car.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: RegisterPageComponent },
  { path: 'car-owner', component: CarOwnerHubComponent },
  { path: 'car-owner/car-new', component: CarOwnerCarNewComponent },
  { path: 'police', component: PoliceHubComponent },
  { path: 'manufacturer', component: ManufaturerHubComponent },
  { path: 'manufacturer/new-car', component: ManufaturerHubNewCarComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
