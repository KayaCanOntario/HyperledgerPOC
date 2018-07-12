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
import { CarOwnerCarEditComponent } from './car-owner-car-edit/car-owner-car-edit.component';
import { CarOwnerCarInfoComponent } from './car-owner-car-info/car-owner-car-info.component';
import { ManufaturerHubCarInfoComponent } from './manufaturer-hub-car-info/manufaturer-hub-car-info.component';
import { ManufaturerHubOrderRequestsComponent } from './manufaturer-hub-order-requests/manufaturer-hub-order-requests.component';
import { ManufaturerHubSellCarComponent } from './manufaturer-hub-sell-car/manufaturer-hub-sell-car.component';
import { ManufaturerHubStockComponent } from './manufaturer-hub-stock/manufaturer-hub-stock.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: RegisterPageComponent },
  { path: 'car-owner', component: CarOwnerHubComponent },
  { path: 'car-owner/car-new', component: CarOwnerCarNewComponent },
  { path: 'car-owner/car-edit', component: CarOwnerCarEditComponent },
  { path: 'car-owner/car-info', component: CarOwnerCarInfoComponent },
  { path: 'police', component: PoliceHubComponent },
  { path: 'manufacturer', component: ManufaturerHubComponent },
  { path: 'manufacturer/new-car', component: ManufaturerHubNewCarComponent },
  { path: 'manufacturer/view-car', component: ManufaturerHubCarInfoComponent },
  { path: 'manufacturer/order-request', component: ManufaturerHubOrderRequestsComponent },
  { path: 'manufacturer/sell-car', component: ManufaturerHubSellCarComponent },
  { path: 'manufacturer/stock', component: ManufaturerHubStockComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
