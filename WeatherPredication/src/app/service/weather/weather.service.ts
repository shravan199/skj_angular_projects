import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Forecast} from '../../model/weather/forecast';


@Injectable()
export class WeatherSerivce {
    apiBaseURL = "http://api.weatherapi.com/v1";
    apiKey = "1c010b4ab27b4a0684b81514221706";

    constructor(private _httpClient: HttpClient) { }

    getWeatherData() {
        let httpOptions = {

            headers: new HttpHeaders()
                .set('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com') // pass name of the header and value
                .set('X-RapidAPI-Key', 'f51418621cmsh4c318c107b6653fp1c0a00jsn65ea6640ad73'),

            params: new HttpParams()
                .set('q', '32837')
        }

        return this._httpClient.get<any>('https://weatherapi-com.p.rapidapi.com/ip.json', httpOptions);
    }

    getCurrentWeather(city: string) {
        const httpOptions2 = {
            headers: new HttpHeaders()
                .set('key', this.apiKey),
            //.set('q', 'Paris')
            params: new HttpParams()
                .set('q', city),
          // responseType: text
        }

        return this._httpClient.get<any>(`${this.apiBaseURL}/current.json`, httpOptions2);
    }

    getCurrentWeatherByLatLng(latLng: string){
        const httpOptions3 = {
            headers: new HttpHeaders()
                .set('key', this.apiKey),
            //.set('q', 'Paris')
            params: new HttpParams()
                .set('q', latLng),
          // responseType: text
        }

        return this._httpClient.get<any>(`${this.apiBaseURL}/current.json`, httpOptions3);
    }

    getForcastWeather() {
        const httpOptions3 = {
            headers: new HttpHeaders()
                .set('key', this.apiKey),
            //.set('q', 'Paris')
            params: new HttpParams()
                .set('q', 'auto:ip')
                .set('days', 3)
                .set('alert', 'yes')
        }

        return this._httpClient.get<any>(`${this.apiBaseURL}/forecast.json`, httpOptions3);
    }

    getForecastWeatherByLatLng(latLng: string):Observable<any>{
        const httpOptions4 = {
            headers: new HttpHeaders()
                .set('key', this.apiKey),
            //.set('q', 'Paris')
            params: new HttpParams()
                .set('q', latLng)
                .set('days', 7)
                .set('alert', 'yes')
        }

        return this._httpClient.get<any>(`${this.apiBaseURL}/forecast.json`, httpOptions4);
    }

    getBankStatement(){
        let url = 'https://apisetu.gov.in/certificate/v3/adityabirlacapital/astmt';

        const httpOptions4 = {
            headers: new HttpHeaders()
                .set('X-APISETU-CLIENTID', 'shravan')
                .set('X-APISETU-APIKEY', 'shravan')
            // params: new HttpParams()
            //     .set('q', 'auto:ip')
            //     .set('days', 3)
            //     .set('alert', 'yes')
        }

        return this._httpClient.get<any>(url, httpOptions4);
    }
}