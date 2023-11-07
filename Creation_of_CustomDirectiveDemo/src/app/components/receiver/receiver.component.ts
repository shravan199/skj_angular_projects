import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent implements OnInit {

  constructor(private dataService: DataService) { }
  dataReceivedFromBS: string = '';
  dataRecievedFromEventEmitter: string = '';
  ngOnInit(): void {

    //this.getLatestData();
   // this.getDataFromSender();
    this.dataReceivedFromBS = this.dataService.behaviorSubIns$.getValue();
    this.dataService.DataByEventEmitter$.subscribe( data => {
      this.dataRecievedFromEventEmitter = data;
    })
  

  }

  getLatestData() {
    this.dataService.behaviorSubObsIns$.subscribe({
      next: (data) => { this.dataReceivedFromBS = data },
      error: (err) => { },
      complete: () => { }
    });
  }

  getDataFromSender() {
    this.dataReceivedFromBS = this.dataService.behaviorSubIns$.getValue();
  }

}
