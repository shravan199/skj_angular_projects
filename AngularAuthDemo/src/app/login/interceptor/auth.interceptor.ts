import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/service/AuthService/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (value) => {
          if (value instanceof HttpErrorResponse) {
            switch (value.status) {
              case 401:
              case 403:
                this.authService.logout();
                this.router.navigateByUrl('/login');
                break;
              default:
                break;
            } // end of switch statement
          }  // end of if condtion
        } // end of tap function  body
      ) //  end of tap utility operator
    ); // end of pipe operator
  }  // end of intercept function

}
