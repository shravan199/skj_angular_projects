import { NgModule } from '@angular/core';
// Import and declare the components that belong to this Employee Module
import { CreateEmployeeComponent } from './create-employee.component';
import { ListEmployeesComponent } from './list-employees.component';
// Import the EmployeeRoutingModule
import { EmployeeRoutingModule } from './employee-routing.module';
import {SharedModule} from '../Shared/shared.module';

@NgModule({
  declarations: [
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [  
    EmployeeRoutingModule,
    SharedModule
  ],
  // exports: [
  //   CreateEmployeeComponent,
  //   ReactiveFormsModule
  // ]
})
export class EmployeeModule { }
