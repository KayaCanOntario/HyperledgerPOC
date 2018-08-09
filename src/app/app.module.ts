import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AppRoutingModule } from './/app-routing.module';
import { CarOwnerHubComponent } from './car-owner-hub/car-owner-hub.component';
import { InsuranceHubComponent } from './insurance-hub/insurance-hub.component';
import { PoliceHubComponent } from './police-hub/police-hub.component';
import { ManufaturerHubComponent } from './manufaturer-hub/manufaturer-hub.component';
import { CarOwnerCarInfoComponent } from './car-owner-car-info/car-owner-car-info.component';
import { CarOwnerCarEditComponent } from './car-owner-car-edit/car-owner-car-edit.component';
import { CarOwnerCarNewComponent } from './car-owner-car-new/car-owner-car-new.component';
import { PoliceHubViewVehiclesComponent } from './police-hub-view-vehicles/police-hub-view-vehicles.component';
import { PoliceHubReportComponent } from './police-hub-report/police-hub-report.component';
import { PoliceHubImpoundComponent } from './police-hub-impound/police-hub-impound.component';
import { PoliceHubViewDetailsComponent } from './police-hub-view-details/police-hub-view-details.component';
import { ManufaturerHubNewCarComponent } from './manufaturer-hub-new-car/manufaturer-hub-new-car.component';
import { ManufaturerHubSellCarComponent } from './manufaturer-hub-sell-car/manufaturer-hub-sell-car.component';
import { ManufaturerHubCarInfoComponent } from './manufaturer-hub-car-info/manufaturer-hub-car-info.component';
import { ManufaturerHubOrderRequestsComponent } from './manufaturer-hub-order-requests/manufaturer-hub-order-requests.component';
import { ManufaturerHubStockComponent } from './manufaturer-hub-stock/manufaturer-hub-stock.component';
import { ZmockDataComponent } from './zmock-data/zmock-data.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from './interceptor/http-client.interceptor'; 
import { CarOwnerOrderComponent } from './car-owner-order/car-owner-order.component';;
import { ManufacturerHubEditCarComponent } from './manufacturer-hub-edit-car/manufacturer-hub-edit-car.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatDialogModule} from '@angular/material';

@NgModule({
  
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CarOwnerHubComponent,
    InsuranceHubComponent,
    PoliceHubComponent,
    ManufaturerHubComponent,
    CarOwnerCarInfoComponent,
    CarOwnerCarEditComponent,
    CarOwnerCarNewComponent,
    PoliceHubViewVehiclesComponent,
    PoliceHubReportComponent,
    PoliceHubImpoundComponent,
    ManufaturerHubNewCarComponent,
    ManufaturerHubSellCarComponent,
    ManufaturerHubCarInfoComponent,
    ManufaturerHubOrderRequestsComponent,
    ManufaturerHubStockComponent,
    ZmockDataComponent,
    PoliceHubViewDetailsComponent,
    CarOwnerOrderComponent,
    ManufacturerHubEditCarComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    } 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
