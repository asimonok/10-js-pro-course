import {Post, Comment} from 'types/types'
import {PostDetailsActionType} from './actions/postDetails'
import {Action} from 'redux'

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchPostDetailsAction = Action<PostDetailsActionType.FETCH_POST_DETAILS>
export type FetchPostDetailsSuccessAction = ActionPayload<PostDetailsActionType.FETCH_POST_DETAILS_SUCCESS, Post>
export type FetchPostCommentsAction = Action<PostDetailsActionType.FETCH_POST_COMMENTS>
export type FetchPostCommentsSuccessAction = ActionPayload<PostDetailsActionType.FETCH_POST_COMMENTS_SUCCESS, Comment[]>


export type PostDetatilsAction = FetchPostDetailsAction
                    | FetchPostDetailsSuccessAction
                    | FetchPostCommentsAction
                    | FetchPostCommentsSuccessAction;

type State = {
    post: Post,
    comments:Comment[], 
    loadingPosts: boolean,
    loadingComments: boolean,
    limit: number,
}

const initialState: State = {
    post: { userId: 1, id: 1, title: '1', body: '1'},
    comments: [],
    loadingPosts: false,
    loadingComments: false,
    limit: 5
}

export const PostDetailsReducer = (state: State = initialState, action: PostDetatilsAction): State => {
    switch(action.type) {
        case PostDetailsActionType.FETCH_POST_DETAILS: {
            return {
                ...state,
                loadingPosts: true,
            }
        }
        case PostDetailsActionType.FETCH_POST_DETAILS_SUCCESS: {
            return {
                ...state,
                post: {...state.post, ...action.payload},
                loadingPosts: false
            }
        }
        case PostDetailsActionType.FETCH_POST_COMMENTS: {
            return {
                ...state,
                loadingComments: true,
            }
        }
        case PostDetailsActionType.FETCH_POST_COMMENTS_SUCCESS: {
            return {
                ...state,
                comments: [...state.comments, ...action.payload],
                loadingComments: false,
            }
        }
    }
    return state;
}