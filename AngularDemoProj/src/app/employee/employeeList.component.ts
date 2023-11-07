import { IEmployee } from './employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: './employeeList.component.html',
    styleUrls: ['./employeeList.component.scss'],
    // Register EmployeeService in this component by
    // declaring it in the providers array
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];
    articles: any;
    indiaTopHeadings: any;
    JSObject: any[] = [];
    // This property keeps track of which radio button is selected
    // We have set the default value to All, so all the employees
    // are displayed in the table by default
    selectedEmployeeCountRadioButton: string = 'All';

    // Inject EmployeeService using the constructor
    // The private variable _employeeService which points to
    // EmployeeService singelton instance is then available
    // throughout this class
    constructor(private _employeeService: EmployeeService) {
        this.employees = this._employeeService.getEmployees();
    }

    ngOnInit(): void {
        //this.employees = this._employeeService.getEmployees();
        this._employeeService.getNews().subscribe((data) => {
            console.log(data);
            this.articles = data['articles'];


        });

        this._employeeService.getIndiaTopHeadings().subscribe((indiaNews: any) => {
            console.log(indiaNews);
            this.indiaTopHeadings = indiaNews['articles'];
            for (let property in indiaNews) {
                this.JSObject = this.JSObject.concat(`Property: ${property} and Value: ${indiaNews[property]}`);
            }
        });

        this._employeeService.getRhreporting().subscribe(rhreportingData => {
              console.log(rhreportingData);
              
        });

    }

    getEmployees() {
        this.employees = this.employees.concat({
            code: 'emp107', name: 'Nancy', gender: 'Female',
            annualSalary: 9800.481, dateOfBirth: '10/28/1979'
        });
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === 'male').length;
    }

    getFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender.toLowerCase() === 'female').length;
    }

    // Depending on which radio button is selected, this method updates
    // selectedEmployeeCountRadioButton property declared above
    // This method is called when the child component (EmployeeCountComponent)
    // raises the custom event - countRadioButtonSelectionChanged
    // The event binding is specified in employeeList.component.html
    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

}