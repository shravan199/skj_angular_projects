import {
  ChangeDetectionStrategy, Component, OnChanges, OnInit,
  VERSION, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'AngularLifeCycleHookDemo';
  message = 'Hello- Message';
  content = 'Hello- Content';
  hideChild = false;
  version = "Amgular " + VERSION.major;

  constructor() {
    console.log("AppComponent:Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("AppComponent:ngOnChanges()");
  }

  ngOnInit(): void {
    console.log("AppComponent:ngOnInit()");
  }

  ngDoCheck(): void {
    console.log("AppComponent:ngDoCheck()");
  }

  ngAfterContentInit(): void {
    console.log("AppComponent:ngAfterContentInit()");
  }

  ngAfterContentChecked(): void {
    console.log("AppComponent:ngAfterContentChecked()");
  }

  ngAfterViewInit(): void {
    console.log("AppComponent:ngAfterViewInit()");
  }

  ngAfterViewChecked(): void {
    console.log("AppComponent:ngAfterViewChecked()");
  }

  ngOnDestroy(): void {
    console.log("AppComponent:ngOnDestroy()");
  }

}
