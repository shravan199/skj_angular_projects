import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, Title ,Meta } from '@angular/platform-browser';
import { interval, take } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YellowBackgroudDirective } from './directives/yellow-backgroud/yellow-backgroud.directive';
import { AppInitService } from './services/app-init/app-init.service';
import { SharedModule } from './shared/shared.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';


export function initializeApp1(appInitService: AppInitService) {
  return () => {
    return appInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    YellowBackgroudDirective,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  providers: [
    AppInitService,
    Title,
    Meta,
    {
      provide: APP_INITIALIZER,
      multi: true,
      useValue: () => {
        console.log("Initialize stuff before rendering the application- App Initilazation");
        //return "I am app_initializer DI token";

        return interval(1000).pipe(take(2));
      }
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (titleSvc: Title) => {
           return () => {
           titleSvc.setTitle("Angular: Title Service Demo");
           }
      },
      deps: [Title]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitService) => {
        return () => {
          return appInitService.Init();
        }
      },
      deps: [AppInitService],
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
