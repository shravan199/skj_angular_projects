import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnComponent } from './components/btn-component-without-ng-content/btn.component';
import { FancyBtnComponent } from './components/btn-component-with-ng-content/fancy-btn.component';
import { CardComponent } from './components/multiple-projections-using-ng-content/card.component';
import { ChildComponent } from './components/child/child.component';
import { GrandChildComponent } from './components/grand-child/grand-child.component';
import { YellowBackgroundDirective } from './directives/yellow-background/yellow-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    BtnComponent,
    FancyBtnComponent,
    CardComponent,
    ChildComponent,
    GrandChildComponent,
    YellowBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
