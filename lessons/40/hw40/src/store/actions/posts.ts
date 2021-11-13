import { Dispatch } from "react"
import {PostAction} from 'store/PostReducer'
import {Post} from 'types/types'

export enum PostActionType {
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_LIMIT = 'ETCH_POSTS_LIMIT'
}

export const fetchPosts = (limit: number) => {
    return (dispatch: Dispatch<PostAction>) => {
        dispatch({type: PostActionType.FETCH_POSTS})
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then((response):Promise<Post[]> => response.json())
        .then(posts => {
            dispatch({type: PostActionType.FETCH_POSTS_SUCCESS, payload: posts})
        })
        .catch(error => console.log(error));
    }
}

export const setPostsLimit = (limit: number) => {
    return {type: PostActionType.FETCH_POSTS_LIMIT, payload: limit}
}

