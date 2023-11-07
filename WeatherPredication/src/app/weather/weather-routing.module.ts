import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
// import {ForecastWeatherComponent} from './forecast-weather/forecast-weather.component';
// import {OldWeatherDataComponent} from './old-weather-data/old-weather-data.component';


const routes: Routes = [
    { path: 'current-weather', component: CurrentWeatherComponent },
    //   {path: 'forecast-weather', component:ForecastWeatherComponent},
    //   {path: 'old-weather-data', component:OldWeatherDataComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WeatherRoutingModule { }
