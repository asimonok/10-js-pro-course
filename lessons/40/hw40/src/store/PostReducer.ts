import {Post} from 'types/types'
import {PostActionType} from './actions/posts'
import {Action} from 'redux'

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchPostAction = Action<PostActionType.FETCH_POSTS>
export type FetchSuccessUserAction = ActionPayload<PostActionType.FETCH_POSTS_SUCCESS, Post[]>

export type PostAction = FetchPostAction | FetchSuccessUserAction;



type State = {
    posts: Post[],
    loading: boolean,
}

const initialState: State = {
    posts: [],
    loading: false,
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
    }
    return state;
}