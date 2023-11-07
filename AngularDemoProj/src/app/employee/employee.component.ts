import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    middleName: string = '';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    imagePath: string = './assets/angularjs attribute interpolation.png';

    isDisabled:boolean = false;
    badHtml: string = 'Hello <script>alert("Hacked");</script> World';

    columnSpan: number = 2;
    showDetails: boolean = false;

    //functions
    getFullName():string{
        return this.firstName + ' ' + this.middleName + ' ' + this.lastName; 
    }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }


  
}