import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string = 'admin';
  password: string = 'admin@123';

  constructor() { }


  login(username: string, password: string): Observable<HttpResponse<any>> {

    if (this.username == username && this.password == password) {

      localStorage.setItem("token", "my_super_secret_token_from_server");

      return of(new HttpResponse({
        status: 200,
        statusText: "HTTP Get request resolved successfully"
      }));
    } else {
      return of(new HttpResponse(
        {
          status: 401,
          statusText: "Getting error making HTTP Get request"
        }));
    }

  }


  logout(): void {
    localStorage.removeItem('token');
  }


  isUserLoggedIn(): boolean {
    if (localStorage.getItem('token') != null) {
      return true;
    }
    else {
      return false;
    }
  }

}


