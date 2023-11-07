import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.behaviorSubIns$.next("Sender 1: This is new Data emitted by BehaviorSubject observable");
    this.dataService.DataByEventEmitter$.emit("Sender 1: I am sending data using event emitter");
  }

  sendLatestData(value: string):void{
     this.dataService.sendData(value);
  }
  
  sendLatestDataToObservable(value: string):void{
    this.dataService.behaviorSubObsIns$.pipe();
 }

}
