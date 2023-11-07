import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-sender2',
  templateUrl: './sender2.component.html',
  styleUrls: ['./sender2.component.css']
})
export class Sender2Component implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.behaviorSubIns$.next("I am sending new value using sender2");
   this.dataService.DataByEventEmitter$.emit("Sender 2: I am sending data using event emitter");
  }

  
}
