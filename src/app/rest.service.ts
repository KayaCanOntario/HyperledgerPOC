import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';
import { map} from 'rxjs/operators';

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

  // Edit an existing asset.
  editAsset(url: string, assetID: string, newAsset: any): Observable<any> {
    return this.http.put(url + '/' + assetID, newAsset).pipe(map(data => data as any));
  }

  //delete an existing asset
  deleteFrom(url: string): Observable<any> {
    return this.http.delete(url);
  }

}
