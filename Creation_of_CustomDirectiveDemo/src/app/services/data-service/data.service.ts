import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  behaviorSubIns$: BehaviorSubject<string> = new BehaviorSubject<string>("I am assign as initial value to behavior-subject");
  behaviorSubObsIns$: Observable<string> = this.behaviorSubIns$.asObservable();
  DataByEventEmitter$: EventEmitter<string> = new EventEmitter<string>();

  sendData(value: string): void {
    this.behaviorSubIns$.next(value);
  }


}
