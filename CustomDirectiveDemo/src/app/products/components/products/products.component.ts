import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy {

  constructor() {
    console.log('ProductsComponent: constructor() called')
  }

  ngOnChanges(): void {
    console.log('ProductsComponent: ngOnChanges() called');
  }


  ngOnInit(): void {
    console.log('ProductsComponent: ngOnInit() called');
  }

  ngDoCheck(): void {
    console.log('ProductsComponent: ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('ProductsComponent: ngAfterContentInit() called');
    //this.titleService.setTitle("Home Page");
  }

  ngAfterContentChecked(): void {
    console.log('ProductsComponent: ngAfterContentChecked() called');
    //this.titleService.setTitle("Home Page");
  }

  ngAfterViewInit(): void {
    console.log('ProductsComponent: ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('ProductsComponent: ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('ProductsComponent: ngOnDestroy() called');
  }

}
