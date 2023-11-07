import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeatherRoutingModule } from './weather-routing.module';
import { CommonModule } from '@angular/common';
import { WeatherSerivce } from "../service/weather/weather.service";


@NgModule({
    declarations: [
  ],
    imports: [FormsModule, ReactiveFormsModule, WeatherRoutingModule,
        CommonModule],
    providers: [WeatherSerivce]
})
export class WeatherModule { }
