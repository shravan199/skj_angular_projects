import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './login/interceptor/auth.interceptor';
import { SharedModule } from './shared/shared.module';
import { BlueBackgroundDirective } from './directives/blue-background/blue-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlueBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
