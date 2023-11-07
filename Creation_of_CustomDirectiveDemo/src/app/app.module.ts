import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundColorDirective } from './directives/background-color/background-color.directive';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { Sender2Component } from './components/sender2/sender2.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { FormsModule } from '@angular/forms';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';
import { ViewChildAndViewChildernQueryListDemoComponent } from './components/view-child-and-view-childern-query-list-demo/view-child-and-view-childern-query-list-demo.component';


export function HttpLoaderFactory(httpClient: any) {
  return new MultiTranslateHttpLoader(httpClient, [
    { prefix: './assets/i18n/', suffix: '.json' }
  ]);
}

@NgModule({
  declarations: [
    AppComponent,
    BackgroundColorDirective,
    SenderComponent,
    ReceiverComponent,
    Sender2Component,
    DomManipulationComponent,
    ViewChildAndViewChildernQueryListDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
