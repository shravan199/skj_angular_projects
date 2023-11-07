import { Injectable } from '@angular/core';
import { BehaviourSubjectService } from '../behaviour-subject/behaviour-subject.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userName: string = 'admin';
  private _password: string = 'admin@123';

  constructor(private bsService: BehaviourSubjectService) { }

  isValidUser(userName: string, password: string): boolean {
    if (userName == this._userName && password == this._password) {
      localStorage.setItem('AuthToken', 'my_super_secret_token_from_server');
      this.bsService.isUserLoggedIn$.next(true);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let _authToken = localStorage.getItem('AuthToken');
   
    if (_authToken != '' && _authToken != null) {
      console.log(`Authtoken value: ${_authToken}`);
      this.bsService.isUserLoggedIn$.next(true);
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('AuthToken');
    this.bsService.isUserLoggedIn$.next(false);
    console.log(`User successfuly logout`);
    //console.log(`isUserLoggedIn$ value in AuthService.logout() method: ${this.bsService.isUserLoggedIn$.getValue()}`);
  }

}
