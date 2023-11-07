import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { UserListRequestAction, UserListSuccessAction } from 'src/app/actions/user-action';
import { User } from 'src/app/models/user';
import { getUserLoaded, getUserLoading, getUsers, RootReducerState } from 'src/app/reducers';
import { getLoaded } from 'src/app/reducers/user-reducer';
import { UserRepositoryService } from 'src/app/repository/user-repository/user-repository.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users: User[] = [];
    constructor(private userRepService: UserRepositoryService, private store: Store<RootReducerState>) { }


    ngOnInit(): void {
        this.fetchData();
    }

    fetchData() {

        const loading$ = this.store.select(getUserLoading);
        const getUserData$ = this.store.select(getUsers);
        const loaded$ = this.store.select(getUserLoaded);
        combineLatest([loading$, loaded$]).subscribe((data) => {
            // when reduce/storage is blank
            if (!data[0] && !data[1]) {
                this.store.dispatch(new UserListRequestAction());
                this.userRepService.getAllUsers().subscribe(data => {
                    this.store.dispatch(new UserListSuccessAction({ users: data }))
                    //console.log("Fetching users list by API call!")
                    //console.log(data);
                });
            }
        });

        getUserData$.subscribe(users => {
            this.users = users;
            console.log("Fetching users list from store!")
            console.log(this.users);
        })
        
    }

}
