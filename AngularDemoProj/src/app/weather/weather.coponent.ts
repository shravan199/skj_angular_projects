import { Component, OnInit } from '@angular/core';
import { WeattherSerivce } from '../Services/weather.service'


@Component({
    selector: "weather",
    templateUrl: "./weather.component.html",
    styleUrls: []

})
export class WeatherComponent implements OnInit {

    weatherServices: any[] = [];
    alphaVarients:any[]= [];
    pageTitle= "Weather Data";
    constructor(private _weatherService: WeattherSerivce) { }

    ngOnInit(): void {
        this._weatherService.getWeatherData().subscribe((data: any) => {         
            console.log("Weather Data" + data);
        });

        this.currentWeather();
        this.forcastWeather();
    }


    currentWeather(){
        this._weatherService.getCurrentWeather().subscribe( (currentWeatherData) => {
              console.log("Current Weather Data" + currentWeatherData['location']);
        });
    }

    forcastWeather(){
        this._weatherService.getForcastWeather().subscribe( (forcastWeatherData) => {
              console.log("Forcast Weather Data" + forcastWeatherData);
        });
    }
}