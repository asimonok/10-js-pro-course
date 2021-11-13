import {Post} from 'types/types'
import {PostActionType} from './actions/posts'
import {Action} from 'redux'

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchPostAction = Action<PostActionType.FETCH_POSTS>
export type FetchSuccessPostAction = ActionPayload<PostActionType.FETCH_POSTS_SUCCESS, Post[]>
export type FetchLimitPostAction = ActionPayload<PostActionType.FETCH_POSTS_LIMIT, number>

export type PostAction = FetchPostAction | FetchSuccessPostAction | FetchLimitPostAction;



type State = {
    posts: Post[],
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
        case PostActionType.FETCH_POSTS: {
            return {
                ...state,
                posts: [],
                loading: true,
            }
        }
        case PostActionType.FETCH_POSTS_SUCCESS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                loading: false
            }
        } 
        case PostActionType.FETCH_POSTS_LIMIT: {
            return {
                ...state,
                limit: action.payload
            }
        }
    }
    return state;
}