import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("FooterComponent: Constructor() called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('FooterComponent: ngOnChanges() called');
  }

  ngOnInit(): void {
    console.log("FooterComponent: ngOnInit() called");
  }

  ngDoCheck(): void {
    console.log('FooterComponent: ngDoCheck() called');
  }
 
  ngAfterContentInit(): void {
    console.log('FooterComponent: ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('FooterComponent: ngAfterContentChecked() called');
    
  }

  ngAfterViewInit(): void {
    console.log('FooterComponent: ngAfterViewInit() called');
  }
 
  ngAfterViewChecked(): void {
    console.log('FooterComponent: ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('FooterComponent: ngOnDestroy() called');
  }


}
