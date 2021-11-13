import { Dispatch } from "react"
import {PostDetatilsAction} from 'store/PostDetatilReducer'
import {Post, Comment} from 'types/types'

export enum PostDetailsActionType {
    FETCH_POST_DETAILS = 'FETCH_POST_DETAILS',
    FETCH_POST_DETAILS_SUCCESS = 'FETCH_POSTS_DETAILS_SUCCESS',
    FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS',
    FETCH_POST_COMMENTS_SUCCESS = 'FETCH_POST_COMMENTS_SUCCESS',
}

export const fetchPostDetails= (postId:string) => {
    return (dispatch: Dispatch<PostDetatilsAction>) => {
        dispatch({type: PostDetailsActionType.FETCH_POST_DETAILS})
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response):Promise<Post> => response.json())
        .then(post => {
            dispatch({type: PostDetailsActionType.FETCH_POST_DETAILS_SUCCESS, payload: post})
        })
        .catch(error => console.log(error));
    }
}

export const fetchPostComments= (postId:string) => {
    return (dispatch: Dispatch<PostDetatilsAction>) => {
        dispatch({type: PostDetailsActionType.FETCH_POST_COMMENTS})
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then((response):Promise<Comment[]> => response.json())
        .then(comments => {
            dispatch({ type:PostDetailsActionType.FETCH_POST_COMMENTS_SUCCESS, payload: comments })
        })
        .catch(error => console.log(error));
    }
}
