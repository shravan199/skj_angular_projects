import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class IndiaCovidDatService{
  apiURL = "https://data.covid19india.org/v4/min/data.min.json";
  
  constructor(private _httpClient:HttpClient){}

  getStateWiseCovidData(){
     return this._httpClient.get<any>(this.apiURL);
  }
}