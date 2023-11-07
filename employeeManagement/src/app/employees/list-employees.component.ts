import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { IEmployee } from './IEmployee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: IEmployee[];
  employee : IEmployee;

  constructor(private _employeeService: EmployeeService, private _router:Router) {
    this.employees = [];
    this.employee = this.employees[0];
  }

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (employeeList) => this.employees = this.employees,
      (err) => console.log(err)
    );
  }

  setEmployee() {
    let emp:any;
    emp.fullName = 'Shravan Kumar Jha';
    emp.contactPreference = 'email';
    emp.email = 'skjha199@gmail.com';
  }getEmployee(id: number) {
    this._employeeService.getEmployee(id)
      .subscribe(
        (employee: IEmployee) => {
          // Store the employee object returned by the
          // REST API in the employee property
          this.employee = employee;
        //  this.editEmployee(employee);
        },
        (err: any) => console.log(err)
      );
  }

  editButtonClick(employeeId: number) {
    this._router.navigate(['/employees/edit', employeeId]);
  }
  

}
