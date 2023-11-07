import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, Product } from '../model/model'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private _httpClient: HttpClient) {
  }

  getCurretnWeatherData(): Observable<Customer> {
   return this._httpClient.get<any>("dfasa");
  }
}
