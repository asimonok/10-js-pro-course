import { Dispatch} from "react"
import {UserPostsAction} from 'store/UserPostsReducer'
import {Post, User} from 'types/types'

export enum UserPostsActionType {
    FETCH_USER_POSTS = 'FETCH_USER_POSTS',
    FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS',
    FETCH_USER = 'FETCH_USER',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_POSTS_ERROR = 'FETCH_USER_POSTS_ERROR',
}

export const fetchUserPosts= (userId:string) => {
    return (dispatch: Dispatch<UserPostsAction>) => {
        dispatch({type: UserPostsActionType.FETCH_USER_POSTS})
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response):Promise<Post[]> => {
            if(response.ok) {
                return response.json()
            }
            dispatch({type: UserPostsActionType.FETCH_USER_POSTS_ERROR, payload: true})
            throw new Error('error ...')})
        .then(posts => {
            dispatch({type: UserPostsActionType.FETCH_USER_POSTS_SUCCESS, payload: posts})
        })
        .catch(error => { 
            console.log(error)
        });
    }
}

export const fetchUser= (userId:string) => {
    return (dispatch: Dispatch<UserPostsAction>) => {
        dispatch({type: UserPostsActionType.FETCH_USER})
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response):Promise<User> => response.json())
        .then(user => {
            dispatch({ type:UserPostsActionType.FETCH_USER_SUCCESS, payload: user })
        })
        .catch(error => console.log(error));
    }
}
