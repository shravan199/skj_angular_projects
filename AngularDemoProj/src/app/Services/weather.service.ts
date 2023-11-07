import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeattherSerivce {
    apiBaseURL = "http://api.weatherapi.com/v1";
    apiKey = "1c010b4ab27b4a0684b81514221706";

    constructor(private _httpClient: HttpClient) {}

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

    getCurrentWeather() {
        const httpOptions2 = {
            headers: new HttpHeaders()
                .set('key', this.apiKey),
            //.set('q', 'Paris')
            params: new HttpParams()
                .set('q', 'auto:ip')
        }

        return this._httpClient.get<any>(`${this.apiBaseURL}/current.json`, httpOptions2);
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
}