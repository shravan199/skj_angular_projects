import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy, OnChanges, DoCheck } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
   AfterViewChecked, OnDestroy {

  constructor() {
    console.log('HomeComponent: constructor() called')
   }
 
  ngOnChanges(): void{
    console.log('HomeComponent: ngOnChanges() called');
  }
  

  ngOnInit(): void {
    console.log('HomeComponent: ngOnInit() called');
  }

  ngDoCheck(): void{
    console.log('HomeComponent: ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('HomeComponent: ngAfterContentInit() called');
   //this.titleService.setTitle("Home Page");
  }

  ngAfterContentChecked(): void {
    console.log('HomeComponent: ngAfterContentChecked() called');
   //this.titleService.setTitle("Home Page");
  }

  ngAfterViewInit(): void {
    console.log('HomeComponent: ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('HomeComponent: ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent: ngOnDestroy() called');
  }

}
