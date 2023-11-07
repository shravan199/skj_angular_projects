import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../service/AuthService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = {} as FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  ngOnInit(): void {

  }

  get usernameControl(): FormControl{
      return this.loginForm.get('userName') as FormControl;
  }

  get passwordControl(): FormControl{
    return this.loginForm.get('password') as FormControl;
}

  login(): void {
    const username = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password).subscribe({
      next: (data) => {
        console.log(data);
       if(data.status == 200) {
        this.router.navigateByUrl(''); // move to dashboard
       }else{
        this.loginForm.reset();
        alert("Please enter valid username or passowrd.")
       }
      },
      error: (err) => {
        console.log('Error occured during login!', err.message)
      },
      complete: () => {
        console.log('Logged-in successfully!')
      }
    });
  }

}

