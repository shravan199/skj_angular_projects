import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeCountComponent } from './employee/employeeCount.component'

import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { LifeCycleHookExampleComponent } from './LifeCycleHook/life-cycle-hook-example';
import { HttpClientModule } from '@angular/common/http';
import { CovidCaseInIndiaComponent } from './Covid/covid-case-in-india.component';
import {IndiaCovidDatService} from './Services/india-covid-data.service';
import {WeatherComponent } from './weather/weather.coponent';
import {WeattherSerivce } from './Services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    LifeCycleHookExampleComponent,
    CovidCaseInIndiaComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [IndiaCovidDatService, WeattherSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
