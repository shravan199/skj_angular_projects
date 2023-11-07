import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { catchError, first, Observable, throwError } from 'rxjs';

@Injectable(
  // { providedIn: 'root' }
)
export class ApiService {
  private baseURL = 'https://jsonplaceholder.typicode.com'
  constructor(private httpClient: HttpClient) {

  }

  AUTH_TOKEN = 'auth_token';

  options = {
    headers: new HttpHeaders()
      .set('Authorization', this.getAuthHeader()),
    params: new HttpParams()
      .set('paramName', 'paramValue'),
    // responseType: "json"
  }


  getUsers(url: string, options2?: any): Observable<any> {
    return this.httpClient.get(this.baseURL + url, this.options)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  // { a: "dfadsf", b: "dfasdf"} // {a: [ {d: "dfds", e: "dfadf"}], b: "dfasdf"}
  private errorHandler(response: any) {
    const err = response.error;
    const keys = Object.keys(err);
    const firstProperty = keys[0];
    let errorMessage = err[firstProperty];


    if (response.status === 401) {
      //delete Auth token
      //redirect user to login page
    }

    if (err[firstProperty] instanceof Array) {
      errorMessage = err[firstProperty][0]
    }

    // this will occur when user not connected to internet
    if (firstProperty === 'isTrusted') {

    }

    console.log(errorMessage);
    return throwError({ message: errorMessage, error: err })
  }

  private getAuthHeader(): string | string[] {
    return `Bearer ${localStorage.getItem(this.AUTH_TOKEN)}`;
  }

}
