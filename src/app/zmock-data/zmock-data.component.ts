import { RestService } from './../rest.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


// Mock vehicle data.
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

// Mock car owner data.
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

// Mock manufacturer data.
const Manufacturers: Array<any> = [
  {
    "$class": "org.example.scottpoc.manufacturer",
    "manId": "91001",
    "address": "8882 Del Monte St. Eau Claire, WI 54701",
    "name": "General Motors",
    "email": "generalmotors@gmail.com",
    "pass": "12345678910"
  },
  {
    "$class": "org.example.scottpoc.manufacturer",
    "manId": "91002",
    "address": "8882 Del Monte St. Eau Claire, WI 54701",
    "name": "Ford",
    "email": "ford@gmail.com",
    "pass": "12345678910"
  }
]

// Mock police officer data.
const Police: Array<any> = [
  {
    "$class": "org.example.scottpoc.policeOfficer",
    "badgeNumber": "91001",
    "firstName": "Ryan",
    "lastName": "Lane",
    "email": "rlane@gmail.com",
    "pass": "12345678910"
  },
  {
    "$class": "org.example.scottpoc.policeOfficer",
    "badgeNumber": "91002",
    "firstName": "Wilson",
    "lastName": "Murphy",
    "email": "wmurphy@gmail.com",
    "pass": "12345678910"
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
  manufacturerStatus: boolean = null;
  policeStatus: boolean = null;

  constructor(
    private restService: RestService, // This is used to make calls to the network API.
    private http: HttpClient) { }

  ngOnInit() {


    // Car Owner mock data. Makes a call to the network API, and it passes the mock
    // data stored in a json object.
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
    // data stored a json object.
    this.restService.postTo("vehicle", JSON.stringify(Vehicles)).subscribe(
      (data) => {
        this.vehicleStatus = true;
      },
      (error) => {
        console.log(error);
        this.vehicleStatus = false;
      }
    );

    // Manufacturer mock data. Makes a call to the network API, and it passes the mock
    // data stored in a json object.
    this.restService.postTo("manufacturer", JSON.stringify(Manufacturers)).subscribe(
      (data) => {
        this.manufacturerStatus = true;
      }, 
      (error) => {
        this.manufacturerStatus = false;
      }
    );

    // Police officer mock data. Makes a call to the network API, and it passes the mock
    // data stored in a json object.
    this.restService.postTo("policeOfficer", JSON.stringify(Police)).subscribe(
      (data) => {
        this.policeStatus = true;
      },
      (error) => {
        this.policeStatus = false;
      }
    )
  }
}
