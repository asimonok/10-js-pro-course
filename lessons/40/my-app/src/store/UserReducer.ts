import {AuthorTypes} from '../types/AuthorTypes';
import {PostTypes} from '../types/PostTypes';
import {Action} from 'redux';
import { Dispatch} from "react";


export enum UserActionType {
    FETCHING_USERS = 'FETCHING_USERS',
    FETCHED_USERS = 'FETCHED_USERS',
}

export const fetchUsers = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCHING_USERS})
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((response):Promise<AuthorTypes[]> => response.json())
          .then( users => {
            dispatch({type: UserActionType.FETCHED_USERS, payload: users})
        }).catch(error => {
            console.log(error);
        })
    }
}

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchUserAction = Action<UserActionType.FETCHING_USERS>
export type FetchSuccessUserAction = ActionPayload<UserActionType.FETCHED_USERS, AuthorTypes[]>

export type UserAction = FetchUserAction | FetchSuccessUserAction | FetchUserAction;

type State = {
    users: AuthorTypes[],
    loading: boolean,
    error: string
}

const initialState: State = {
    users: [],
    loading: false,
    error: ''
}

export const UserReducer = (state: State = initialState, action: UserAction): State => {
    switch(action.type) {
        case UserActionType.FETCHING_USERS: {
            return {
                ...state,
                users: [],
                loading: true,
            }
        }
        case UserActionType.FETCHED_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.payload],
                loading: false
            }
        }
        default: 
            return state;
    }
}