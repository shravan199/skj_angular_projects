import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './abc/xyz/xyz.component';
import { PqrComponent } from './pqr.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { StudentsModule } from './modules/students/students.module'
import { CustomerServiceService } from './services/customer-service.service';
import { FirstDirectiveDirective } from './custom-directives/first-directive.directive';
import { UpperCasePipe } from './pipes/upper-case.pipe';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    XyzComponent,
    PqrComponent,
    FirstDirectiveDirective,
    UpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    StudentsModule,
    HttpClientModule
  ],
  providers: [CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
