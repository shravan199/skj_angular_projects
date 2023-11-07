import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


// The @Injectable() decorator is used to inject other dependencies
// into this service. As our service does not have any dependencies
// service works exactly the same way. However, Angular recomends
// to always use @Injectable() decorator to ensures consistency
@Injectable()
export class EmployeeService {

  //Endpoint URL
  baseApiURL: string = 'https://newsapi.org';

  // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/text',
      'response-Type': 'text',
      'Access-Control-Allow-Origin' : '*'
      //Authorization: 'my-auth-token'
    })
  };

  API_KEY = '62f079221d4a4c7e81e4e65cf7b5f591';

  // Inject Angular httpClient service
  constructor(private _httpClient: HttpClient) {
  }

  public getNews() {
    // URL =`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`;
    return this._httpClient.get<any>(this.baseApiURL + `/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }

  public getIndiaTopHeadings(){
    let url: 'https://newsapi.org/v2/top-headlines?country=in';
    return this._httpClient.get<any>(this.baseApiURL +`/v2/top-headlines?country=in&apiKey=${this.API_KEY}`);
  }
 

  public getRhreporting(){

    let apiURL2= "https://lnmu.ac.in/constituent-colleges.php";
    let apiURL3= "https://ap.lijit.com/readerinfo/v2";
    let apiURL4 ="72.251.249.13:443";
    let apiURL = "https://rhreporting.nic.in/netiay/SocialAuditReport/BeneficiaryDetailForSocialAuditReport.aspx";
    return this._httpClient.get<any>(apiURL2, this.httpOptions);
  }

  // HttpClient API get() method => Fetch employees list
  getEmployees3(): Observable<IEmployee> {
    return this._httpClient
      .get<IEmployee>(this.baseApiURL + '/employees')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API post() method => Create employee
  createEmployee(employee: any): Observable<IEmployee> {
    return this._httpClient
      .post<IEmployee>(
        this.baseApiURL + '/employees',
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id: any, employee: IEmployee): Observable<IEmployee> {
    return this._httpClient
      .put<IEmployee>(
        this.baseApiURL + '/employees/' + id,
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id: any) {
    return this._httpClient
      .delete<IEmployee>(this.baseApiURL + '/employees/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  // Notice the method return type is Observable<IEmployee[]>
  getEmployees2(): Observable<IEmployee[]> {
    // To convert Observable<Response> to Observable<IEmployee[]>
    // we are using the map operator
    return this._httpClient.get<IEmployee[]>('http://localhost:24535/api/employees');
  }

  employees: IEmployee[] = [
    {
      code: 'emp101', name: 'Tom', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '6/25/1988'
    },
    {
      code: 'emp102', name: 'Alex', gender: 'Male',
      annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
      code: 'emp103', name: 'Mike', gender: 'Male',
      annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
      code: 'emp104', name: 'Mary', gender: 'Female',
      annualSalary: 6500.826, dateOfBirth: '10/14/1980'
    },
    {
      code: 'emp105', name: 'Nancy', gender: 'Female',
      annualSalary: 6700.826, dateOfBirth: '12/15/1982'
    },
    {
      code: 'emp106', name: 'Steve', gender: 'Male',
      annualSalary: 7700.481, dateOfBirth: '11/18/1979'
    }
  ]

  getEmployees(): IEmployee[] {
    return this.employees;
  }
}