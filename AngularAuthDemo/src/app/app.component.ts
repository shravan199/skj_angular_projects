import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router, RouterEvent } from '@angular/router';
import { AuthService } from './service/AuthService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoginPage: boolean = false;
  title = 'AngularAuthDemo';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }


  ngOnInit() {
   console.log(this.router.routerState)

    this.router.events.subscribe(evnt => {
      if (evnt instanceof NavigationEnd) {
        console.log('Current event is NavigationEnd event');
        console.log(evnt.url);
        this.isLoginPage = evnt.url.toLowerCase() == '/login' ? true : false;
      }
    });
    //console.log(this.router['location']._platformLocation.location.href);


  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }



}




