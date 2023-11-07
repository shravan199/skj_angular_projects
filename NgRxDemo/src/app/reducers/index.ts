import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUserReducer from "./user-reducer";

export interface RootReducerState {
    users: fromUserReducer.UserReducerState;
}

export const RootReducer: ActionReducerMap<RootReducerState> = {
    users: fromUserReducer.UserReducer
};

export const getUserState = (state: RootReducerState) => state.users;

export const getUserLoaded = createSelector(getUserState, fromUserReducer.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUserReducer.getLoading);
export const getUsers = createSelector(getUserState, fromUserReducer.getUsers);