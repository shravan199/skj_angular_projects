import { Component, Input, OnInit } from '@angular/core';
import { LocationObject } from '../../model/weather/location-object';
import { CurrentWeatherObject } from '../../model/weather/current-weather-object';
import { WeatherSerivce } from '../../service/weather/weather.service';
import { Forecast, Forecastday } from '../../model/weather/forecast';
import {retry} from 'rxjs';

@Component({
  selector: 'forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {

  locationObj: LocationObject = {} as LocationObject;
  forecastObj: Forecast = {} as Forecast;
  forcastdayObj: Forecastday = {} as Forecastday;
  currentWeatherObj: CurrentWeatherObject = {} as CurrentWeatherObject;
  @Input()
  latLngLitral: string = '';

  constructor(private weatherSerivce: WeatherSerivce) { }

  ngOnInit(): void {
    console.log(`Calling forecast ngOnInit() function: ${this.locationObj}`);
  }

  getForecastedWeatherInfo() {
    this.weatherSerivce.getForecastWeatherByLatLng(this.latLngLitral)
      .subscribe((forecastedWeatherData) => {
        console.log(forecastedWeatherData)
        //this.locationObj = forecastedWeatherData['location'];
        //this.currentWeatherObj = forecastedWeatherData['current'];
       // console.log(this.currentWeatherObj);

        this.forecastObj = forecastedWeatherData['forecast'];
        console.log(this.forecastObj);
      // this.forcastdayObj = this.forecastObj['forecastday'];
        console.log(this.forecastObj.forecastday);

        console.log("Forecast Weather Info Retrieved Successfully");
      });
  }

}
