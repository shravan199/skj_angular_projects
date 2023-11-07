import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
AfterViewChecked, OnDestroy  {

  loginForm: FormGroup = {} as FormGroup;

  constructor(private AuthSvc: AuthService, private fb: FormBuilder,
    private router: Router, private titleSvc: Title) {
      console.log('LoginComponent: constructor() called');
     }

    
  ngOnChanges(): void{
    console.log('LoginComponent: ngOnChanges() called');
  }

  ngOnInit(): void {
    console.log('LoginComponent: ngOnInit() called');
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  ngDoCheck(): void{
    console.log('LoginComponent: ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('LoginComponent: ngAfterContentInit() called');
   //this.titleService.setTitle("Home Page");
  }

  ngAfterContentChecked(): void {
    console.log('LoginComponent: ngAfterContentChecked() called');
   //this.titleService.setTitle("Home Page");
  }

  ngAfterViewInit(): void {
    console.log('LoginComponent: ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('LoginComponent: ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('LoginComponent: ngOnDestroy() called');
  }


 

  submit() {
    console.log('logging the value')
    let userName = this.loginForm.get('userName')?.value;
    let password = this.loginForm.get('password')?.value;
    console.log(userName);
    console.log(password);
    // if user is valid navigate to home page (path: '')
    if (this.AuthSvc.isValidUser(userName, password)) {
      this.router.navigateByUrl('');
    } else {
      alert('Please enter valid credential.')
      //this.router.navigateByUrl('/login');
    }
  }

}
