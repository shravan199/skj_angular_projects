import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './weather/weather.module';
import { SharedModule } from './shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { AngularGoogleMapComponent } from './shared/component/angular-google-map/Angular-google-map.component';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './weather/forecast-weather/forecast-weather.component'



@NgModule({
  declarations: [
    AppComponent, AngularGoogleMapComponent,
    CurrentWeatherComponent, ForecastWeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    WeatherModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyDIuBJczEsQ0rbfUGF6_QlAZhokT97Xm84',
      apiKey: 'AIzaSyBvu-SNFkZZ5XU2KcGzYgpH4-R6DUi3uyw',
      libraries: ['places']
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
