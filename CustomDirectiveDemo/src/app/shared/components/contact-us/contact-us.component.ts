import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
AfterViewChecked, OnDestroy {

constructor() {
 console.log('ContactUsComponent: constructor() called')
}

ngOnChanges(): void{
 console.log('ContactUsComponent: ngOnChanges() called');
}


ngOnInit(): void {
 console.log('ContactUsComponent: ngOnInit() called');
}

ngDoCheck(): void{
 console.log('ContactUsComponent: ngDoCheck() called');
}

ngAfterContentInit(): void {
 console.log('ContactUsComponent: ngAfterContentInit() called');
//this.titleService.setTitle("Home Page");
}

ngAfterContentChecked(): void {
 console.log('ContactUsComponent: ngAfterContentChecked() called');
//this.titleService.setTitle("Home Page");
}

ngAfterViewInit(): void {
 console.log('ContactUsComponent: ngAfterViewInit() called');
}

ngAfterViewChecked(): void {
 console.log('ContactUsComponent: ngAfterViewChecked() called');
}

ngOnDestroy(): void {
 console.log('ContactUsComponent: ngOnDestroy() called');
}

}
