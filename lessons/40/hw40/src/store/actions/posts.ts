import { Dispatch } from "react"
import {PostAction} from 'store/PostReducer'
import {Post} from 'types/types'

export enum PostActionType {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
}

export const fetchPosts = () => {
    return (dispatch: Dispatch<PostAction>) => {
        dispatch({type: PostActionType.FETCH_POSTS})
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response):Promise<Post[]> => response.json())
        .then(posts => {
            dispatch({type: PostActionType.FETCH_POSTS_SUCCESS, payload: posts})
        })
        .catch(error => console.log(error));
    }
}