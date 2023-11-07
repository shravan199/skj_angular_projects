import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryStateCityService {

  baseURL = "https://api.countrystatecity.in/v1/states";
  apiKey= "cHRVTUhXcDdOU29pSnd0aUxYbUZ0S24wQmJwejFJZ3pXNkRCWmZIVA==";

   httpOptions ={
       headers : new HttpHeaders()
       .set("X-CSCAPI-KEY", this.apiKey)
  }

  constructor(private _httpClient :HttpClient) {  }
  
   getCity(): Observable<any>{
        return this._httpClient.get(this.baseURL, this.httpOptions)
   }
}
