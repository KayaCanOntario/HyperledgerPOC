import { Vehicle } from './models/vehicle';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  // Method to verify that the service has started and is running properly.
  isWorking(): void {
    console.log("Rest Service is working.")
  }

  // Post X items to the network.
  postTo(url: string, array: any): Observable<any> {
    return this.http.post(url, array);
  }

  // Fetch all data from the network of a certain type
  getAllFrom(url: string): Observable<any> {
    return this.http.get(url).pipe(map(data=> data as any));
  }

}
