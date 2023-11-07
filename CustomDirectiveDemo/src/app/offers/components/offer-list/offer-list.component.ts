import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, 
AfterViewChecked, OnDestroy {

constructor() {
 console.log('OfferListComponent: constructor() called')
}

ngOnChanges(): void{
 console.log('OfferListComponent: ngOnChanges() called');
}


ngOnInit(): void {
 console.log('OfferListComponent: ngOnInit() called');
}

ngDoCheck(): void{
 console.log('OfferListComponent: ngDoCheck() called');
}

ngAfterContentInit(): void {
 console.log('OfferListComponent: ngAfterContentInit() called');
//this.titleService.setTitle("Home Page");
}

ngAfterContentChecked(): void {
 console.log('OfferListComponent: ngAfterContentChecked() called');
//this.titleService.setTitle("Home Page");
}

ngAfterViewInit(): void {
 console.log('OfferListComponent: ngAfterViewInit() called');
}

ngAfterViewChecked(): void {
 console.log('OfferListComponent: ngAfterViewChecked() called');
}

ngOnDestroy(): void {
 console.log('OfferListComponent: ngOnDestroy() called');
}

}
