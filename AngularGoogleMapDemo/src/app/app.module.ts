import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { CountryStateCityService } from './services/country-state-city.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
     // apiKey: 'AIzaSyDIuBJczEsQ0rbfUGF6_QlAZhokT97Xm84',
      apiKey: 'AIzaSyBvu-SNFkZZ5XU2KcGzYgpH4-R6DUi3uyw',
      libraries: ['places']
    }),
  ],
  providers: [CountryStateCityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
