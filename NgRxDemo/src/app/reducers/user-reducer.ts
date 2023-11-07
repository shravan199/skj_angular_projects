import { User } from "../models/user";
import { Action } from '../actions/index'
import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../actions/user-action";

export interface UserReducerState {
    loading: boolean;
    users: User[];
    loaded: boolean;
}

const initialState: UserReducerState = {
    loading: false,
    users: [],
    loaded: false
}

export function UserReducer(state = initialState, action: Action): UserReducerState {
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return { ...state, loading: true};
        }
        case USER_LIST_SUCCESS: {
            const updatedUsersList = action.payload.users;
            return { ...state, loading: false, loaded: true, users: updatedUsersList };
        }
        default: {
            return state;
        }
    }
}

// selectors (behavirlasubject)

export const getLoading = (state : UserReducerState) => state.loading;
export const getUsers = (state: UserReducerState) => state.users;
export const getLoaded = (state : UserReducerState) => state.loaded;
