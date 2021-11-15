import {AuthorTypes} from '../types/AuthorTypes';
import {PostTypes} from '../types/PostTypes';
import {UserPostsAction} from '../store/UserPostsReduser';
import {Action} from 'redux';
import { Dispatch} from "react";


export enum UserActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
}

export const fetchUsers = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCH_USERS})
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((response):Promise<AuthorTypes[]> => response.json())
          .then( users => {
            dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: users})
        }).catch(error => {
            console.log(error);
        })
    }
}

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchUserAction = Action<UserActionType.FETCH_USERS>
export type FetchSuccessUserAction = ActionPayload<UserActionType.FETCH_USERS_SUCCESS, AuthorTypes[]>

export type UserAction = FetchUserAction | FetchSuccessUserAction;

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

export enum UserPostsActionType {
    FETCHING_USER_POSTS = 'FETCHING_USER_POSTS',
    FETCHED_USER_POSTS = 'FETCHED_USER_POSTS',
    FETCHING_USER = 'FETCHING_USER',
    FETCHED_USER = 'FETCHED_USER',
    FETCHING_ERROR = 'FETCHING_ERROR',
}

export const fetchUserPosts= (userId:string) => {
    return (dispatch: Dispatch<UserPostsAction>) => {
        dispatch({type: UserPostsActionType.FETCHING_USER_POSTS})
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response):Promise<PostTypes[]> => {
            if(response.ok) {
                return response.json()
            }
            dispatch({type: UserPostsActionType.FETCHING_ERROR, payload: true})
            throw new Error('error ...')})
        .then(posts => {
            dispatch({type: UserPostsActionType.FETCHED_USER_POSTS, payload: posts})
        })
        .catch(error => { 
            console.log(error)
        });
    }
}

export const fetchUser= (userId:string) => {
    return (dispatch: Dispatch<UserPostsAction>) => {
        dispatch({type: UserPostsActionType.FETCHING_USER})
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response):Promise<AuthorTypes> => response.json())
        .then(user => {
            dispatch({ type:UserPostsActionType.FETCHED_USER, payload: user })
        })
        .catch(error => console.log(error));
    }
}

export const UserReducer = (state: State = initialState, action: UserAction): State => {
    switch(action.type) {
        case UserActionType.FETCH_USERS: {
            return {
                ...state,
                users: [],
                loading: true,
            }
        }
        case UserActionType.FETCH_USERS_SUCCESS: {
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