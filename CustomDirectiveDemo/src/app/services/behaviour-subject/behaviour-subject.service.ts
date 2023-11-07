import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectService {

  constructor() { }

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
}
