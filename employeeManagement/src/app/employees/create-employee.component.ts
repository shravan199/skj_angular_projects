import { Component, OnInit } from '@angular/core';
// Import FormGroup and FormControl classes
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { CustomValidators } from '../Shared/custom.validator';
import {EmployeeService} from '../services/employee.service';
import {IEmployee}  from './IEmployee';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})


export class CreateEmployeeComponent implements OnInit {
  // This FormGroup contains fullName and Email form controls
  employeeForm: FormGroup;
  employee: IEmployee;

  constructor(
    private fb: FormBuilder,
    private _employeeService: EmployeeService,
    private  _router: Router
  ) {
    this.employee  =  Object();
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference: ['email'],
      email: ['', [Validators.required, CustomValidators.emailDomain('skjtechnology.com')]],
      phone: ['']
    });
  }

  // Initialise the FormGroup with the 2 FormControls we need.
  // ngOnInit ensures the FormGroup and it's form controls are
  // created when the component is initialised
  ngOnInit() {
    // Subscribe to valueChanges observable
    this.employeeForm.controls["fullName"].valueChanges.subscribe(
      value => {
        console.log(value);
      }
    );

    // Subscribe to FormGroup valueChanges observable
    // this.employeeForm.valueChanges.subscribe(
    //   value => {
    //     console.log(JSON.stringify(value));
    //   }

    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors2(this.employeeForm);
    });

    //post requst
    // this._router.parseUrl.subscribe(params => {
    //   const empId = +params.get('id');
    //   if (empId) {
    //     this.getEmployee(empId);
    //   } else {
    //     this.employee = {
    //       id: Number.MIN_VALUE,
    //       fullName: '',
    //       contactPreference: '',
    //       email: '',
    //       phone: Number.MAX_VALUE,
    //       skills: []
    //     };
    //   }
    // });

  } // end of ngOnInit()

  logValidationErrors2(empFormControl: AbstractControl) {
    return null;
  }

  logValidationErrors(): string {
    return 'Hello';
  }


  onSubmit(): void {
    this.mapFormValuesToEmployeeModel();
    if (this.employee.id) {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => this._router.navigate(['employees']),
        (err: any) => console.log(err)
      );
    } else {
      this._employeeService.addEmployee(this.employee).subscribe(
        () => this._router.navigate(['employees']),
        (err: any) => console.log(err)
      );
    }
  }
  onLoadDataClick(): void {
    this.employeeForm.setValue({
      fullName: 'Pragim Technologies',
      email: 'pragim@pragimtech.com'
    });
  }

  // If the Selected Radio Button value is "phone", then add the
  // required validator function otherwise remove it
  onContactPrefernceChange(selectedValue: string) {
    const phoneFormControl = this.employeeForm.get('phone');
    if (selectedValue === 'phone') {
      // phoneFormControl.setValidators(Validators.required);
    } else {
      // phoneFormControl.clearValidators();
    }
    // phoneFormControl.updateValueAndValidity();
  }

  addSkillButtonClick() {
    (<FormArray>this.employeeForm.get('skills'));
  }

  addSkillFormGroup(){

  }

  mapFormValuesToEmployeeModel() {
    this.employee.fullName = this.employeeForm.value.fullName;
    this.employee.contactPreference = this.employeeForm.value.contactPreference;
    this.employee.email = this.employeeForm.value.emailGroup.email;
    this.employee.phone = this.employeeForm.value.phone;
    this.employee.skills = this.employeeForm.value.skills;
  }

  
  // Include phone property
  formErrors = {
    'fullName': '',
    'email': '',
    'phone': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };

  // Include required error message for phone form control
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters',
      'maxlength': 'Full Name must be less than 10 characters.',
    },
    'email': {
      'required': 'Email is required.',
      'emailDomain': 'Email domian should be prgaimtech.com'
    },
    'phone': {
      'required': 'Phone is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };


}