import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-and-view-childern-query-list-demo',
  templateUrl: './view-child-and-view-childern-query-list-demo.component.html',
  styleUrls: ['./view-child-and-view-childern-query-list-demo.component.css']
})
export class ViewChildAndViewChildernQueryListDemoComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

  decrament() {
   this.count--;
  }

}
