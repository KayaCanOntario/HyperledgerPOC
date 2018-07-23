import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url: string = "http://rivaschyper.eastus.cloudapp.azure.com/api/";

  constructor(private http: HttpClient) { }

  // Method to verify that the service has started and is running properly.
  isWorking(): void {
    console.log("Rest Service is working.")
  }

  // Post X items to the network.
  postTo(url: string, array: any): Observable<any> {
    return this.http.post(this.url + url, array);
  }

  // Fetch all X items from the network. The data fetched depends on the 
  // URL given as a parameter.
  getAllFrom(url: string): void {
    this.http.get(this.url + url).subscribe(data => {
      console.log(data);
    });
  }

}
