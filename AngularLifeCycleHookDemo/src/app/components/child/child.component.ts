import {
  ChangeDetectionStrategy, Component, OnChanges, OnInit,
 DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, SimpleChanges, Input
} from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  message: string = '';

  customer = new Customer();

  constructor() {
    console.log("ChildComponent:Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ChildComponent:ngOnChanges()");
  }

  ngOnInit(): void {
    console.log("ChildComponent:ngOnInit()");
  }

  ngDoCheck(): void {
    console.log("ChildComponent:ngDoCheck()");
  }

  ngAfterContentInit(): void {
    console.log("ChildComponent:ngAfterContentInit()");
  }

  ngAfterContentChecked(): void {
    console.log("ChildComponent:ngAfterContentChecked()");
  }

  ngAfterViewInit(): void {
    console.log("ChildComponent:ngAfterViewInit()");
  }

  ngAfterViewChecked(): void {
    console.log("ChildComponent:ngAfterViewChecked()");
  }

  ngOnDestroy(): void {
    console.log("ChildComponent:ngOnDestroy()");
  }

}
