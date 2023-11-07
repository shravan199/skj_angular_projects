import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor(private authSvc: AuthService, private router: Router) { console.log('HeaderComponent: constructor() called'); }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('HeaderComponent: ngOnChanges() called');
  }

  ngOnInit(): void {
    console.log("HeaderComponent: ngOnInit() called");
  }

  ngDoCheck(): void {
    console.log('HeaderComponent: ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('HeaderComponent: ngAfterContentInit() called');
  }

  ngAfterContentChecked(): void {
    console.log('HeaderComponent: ngAfterContentChecked() called');
  }

  ngAfterViewInit(): void {
    console.log('HeaderComponent: ngAfterViewInit() called');
  }

  ngAfterViewChecked(): void {
    console.log('HeaderComponent: ngAfterViewChecked() called');
  }

  ngOnDestroy(): void {
    console.log('HeaderComponent: ngOnDestroy() called');
  }

  logout() {
    this.authSvc.logout();
    this.router.navigateByUrl("/logout");
  }

}
