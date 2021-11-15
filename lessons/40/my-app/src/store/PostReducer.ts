import {PostTypes} from '../types/PostTypes';
import { Dispatch } from "react";
import {Action} from 'redux';

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchPostAction = Action<PostActionType.FETCHING_POSTS>
export type FetchSuccessPostAction = ActionPayload<PostActionType.FETCHED_POSTS, PostTypes[]>
export type FetchLimitPostAction = ActionPayload<PostActionType.FETCH_POSTS_DISPLAY, number>

export type PostAction = FetchPostAction | FetchSuccessPostAction | FetchLimitPostAction;

export enum PostActionType {
    FETCHING_POSTS = 'FETCHING_POSTS',
    FETCHED_POSTS = 'FETCHED_POSTS',
    FETCH_POSTS_DISPLAY = 'FETCH_POSTS_DISPLAY'
}

export const fetchPosts = (limit: number) => {
    return (dispatch: Dispatch<PostAction>) => {
        dispatch({type: PostActionType.FETCHING_POSTS})
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then((response):Promise<PostTypes[]> => response.json())
        .then(posts => {
            dispatch({type: PostActionType.FETCHED_POSTS, payload: posts})
        })
        .catch(error => console.log(error));
    }
}

export const setPostsLimit = (limit: number) => {
    return {type: PostActionType.FETCH_POSTS_DISPLAY, payload: limit}
}


type State = {
    posts: PostTypes[],
    loading: boolean,
    limit: number
}

const initialState: State = {
    posts: [],
    loading: false,
    limit: 5
}

export const PostReducer = (state: State = initialState, action: PostAction): State => {
    switch(action.type) {
        case PostActionType.FETCHING_POSTS: {
            return {
                ...state,
                posts: [],
                loading: true,
            }
        }
        case PostActionType.FETCHED_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                loading: false
            }
        } 
        case PostActionType.FETCH_POSTS_DISPLAY: {
            return {
                ...state,
                limit: action.payload
            }
        }
        default: 
            return state;
    }
}