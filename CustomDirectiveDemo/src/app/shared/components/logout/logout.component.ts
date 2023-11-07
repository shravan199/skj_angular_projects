import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,
  DoCheck, OnChanges, OnDestroy, OnInit
} from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  constructor() {
    console.log('LogoutComponent: constructor() called')
  }

  ngOnChanges(): void {
    console.log('LogoutComponent: ngOnChanges() called');
  }


  ngOnInit(): void {
    console.log('LogoutComponent: ngOnInit() called');
  }

  ngDoCheck(): void {
    console.log('LogoutComponent: ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('LogoutComponent: ngAfterContentInit() called');
    //this.titleService.setTitle("Home Page");
  }

  ngAfterContentChecked(): void {
    console.log('LogoutComponent: ngAfterContentChecked() called');
    //this.titleService.setTitle("Home Page");
  }

  ngAfterViewInit(): void {
    console.log('LogoutComponent: ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('LogoutComponent: ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('LogoutComponent: ngOnDestroy() called');
  }

}

