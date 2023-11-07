import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "src/app/models/user";
import { ApiService } from "src/app/services/APICalls/api.service";

@Injectable()
export class UserRepositoryService {
    constructor(private apiService: ApiService){}

  getAllUsers(): Observable<User[]> {
    return this.apiService.getUsers('/users').pipe(map(data => data as User[]))
  }
}