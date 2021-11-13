import { Dispatch } from "react"
import {UserAction} from 'store/UserReducer'
import {User} from 'types/types'

export enum UserActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
}

export const fetchUsers = () => {
    return (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionType.FETCH_USERS})
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((response):Promise<User[]> => response.json())
          .then( users => {
            dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: users})
        }).catch(error => {
            console.log(error);
        })
    }
}


