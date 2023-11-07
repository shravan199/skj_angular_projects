
import { User } from '../models/user';

export const USER_LIST_REQUEST = "User list request";
export const USER_LIST_SUCCESS = "User list success";
export const USER_LIST_FAILED = "User list failed";

export class UserListRequestAction {
    readonly type = USER_LIST_REQUEST;
    constructor() { }
}

export class UserListSuccessAction {
    readonly type = USER_LIST_SUCCESS;
    constructor(public payload?: { users: User[] }) { }
}

export class UserListFailedAction {
    readonly type = USER_LIST_FAILED;
    constructor() { }
}