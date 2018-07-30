import { RestService } from './../rest.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const Vehicles: Array<any> = [{
  "$class": "org.example.scottpoc.vehicle",
  "VIN": "1H1CN41J",
  "owner": "resource:org.example.scottpoc.carOwner#91001",
  "plate": "BTRD 094",
  "status": "Active",
  "make": "Chevy",
  "model": "Nova",
  "colour": "Blue",
  "insurance": "01/01/19",
  "weight": 18,
  "height": 2,
  "length": 8,
  "width": 2.2,
  "numSeats": 5
},
{
  "$class": "org.example.scottpoc.vehicle",
  "VIN": "1H2CN41J",
  "owner": "resource:org.example.scottpoc.carOwner#91001",
  "plate": "BNKL 323",
  "status": "Active",
  "make": "Honda",
  "model": "Accord",
  "colour": "Black",
  "insurance": "01/01/19",
  "weight": 18,
  "height": 2,
  "length": 8,
  "width": 2.2,
  "numSeats": 5
},
{
  "$class": "org.example.scottpoc.vehicle",
  "VIN": "1H3CN41J",
  "owner": "resource:org.example.scottpoc.carOwner#91002",
  "plate": "BTKD 428",
  "status": "Active",
  "make": "Honda",
  "model": "Odyssey",
  "colour": "Gray",
  "insurance": "Expired",
  "weight": 18,
  "height": 2,
  "length": 8,
  "width": 2.2,
  "numSeats": 5
}]

const CarOwners: Array<any> = [
  {
    "$class": "org.example.scottpoc.carOwner",
    "ownerId": "91001",
    "firstName": "Harry",
    "lastName": "Newman",
    "email": "harry@gmail.com",
    "pass": "Ex"
  },
  {
    "$class": "org.example.scottpoc.carOwner",
    "ownerId": "91002",
    "firstName": "Victoria",
    "lastName": "Richards",
    "email": "victoria@gmail.com",
    "pass": "Ex"
  },
  {
    "$class": "org.example.scottpoc.carOwner",
    "ownerId": "91003",
    "firstName": "Johnny",
    "lastName": "Shaw",
    "email": "johnny@gmail.com",
    "pass": "Ex"
  }

]

@Component({
  selector: 'app-zmock-data',
  templateUrl: './zmock-data.component.html',
  styleUrls: ['./zmock-data.component.css']
})
/*
* This component is responsible for generating the mock data for the Hyperleger network. 
* 
*/




export class ZmockDataComponent implements OnInit {
  carOwnerStatus: boolean = null;
  vehicleStatus: boolean = null;

  constructor(
    private restService: RestService, // This is used to make calls to the network API.
    private http: HttpClient) { }

  ngOnInit() {
    console.log(JSON.stringify(CarOwners));


    // Car Owner mock data. Makes a call to the network API, and it passes the mock
    // data stored the json file as the parameters. 
    this.restService.postTo("carOwner", JSON.stringify(CarOwners)).subscribe(
      (data) => {
        this.carOwnerStatus = true;
      },
      (error) => {
        console.log(error);
        this.carOwnerStatus = false;
      }
    );

    // Vehicle mock data. Makes a call to the network API, and it passes the mock
    // data stored the json file as the parameters. 
    this.restService.postTo("vehicle", JSON.stringify(Vehicles)).subscribe(
      (data) => {
        this.vehicleStatus = true;
      },
      (error) => {
        console.log(error);
        this.vehicleStatus = false;
      }
    );

  }
}
