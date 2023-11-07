import {
  ChangeDetectionStrategy, Component, OnChanges, OnInit,
 DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, SimpleChanges, Input
} from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  @Input()
  customer = new Customer();


  constructor() {
    console.log("GrandChildComponent:Constructor");
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("GrandChildComponent:ngOnChanges()");
  }

  ngOnInit(): void {
    console.log("GrandChildComponent:ngOnInit()");
  }

  ngDoCheck(): void {
    console.log("GrandChildComponent:ngDoCheck()");
  }

  ngAfterContentInit(): void {
    console.log("GrandChildComponent:ngAfterContentInit()");
  }

  ngAfterContentChecked(): void {
    console.log("GrandChildComponent:ngAfterContentChecked()");
  }

  ngAfterViewInit(): void {
    console.log("GrandChildComponent:ngAfterViewInit()");
  }

  ngAfterViewChecked(): void {
    console.log("GrandChildComponent:ngAfterViewChecked()");
  }

  ngOnDestroy(): void {
    console.log("GrandChildComponent:ngOnDestroy()");
  }

}
