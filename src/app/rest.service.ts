import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string = "http://rivaschyper.eastus.cloudapp.azure.com/api/carOwner";

  constructor(private http: HttpClient) { }

  // Method to verify that the service has started and is running properly.
  isWorking(): void {
    console.log("Rest Service is working.")
  }

  // Temporary method that gets all carOwners from the rest api
  getAllcarOwners(): void {
    this.http.get(this.url).subscribe(data => {
      console.log(data);
    });
  }

}
