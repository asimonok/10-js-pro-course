import {AuthorTypes} from '../types/AuthorTypes';
import {PostTypes} from '../types/PostTypes';
import {UserPostsActionType} from '../store/UserReducer';
import {Action} from 'redux'

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchUserPostsAction = Action<UserPostsActionType.FETCHING_USER_POSTS>
export type FetchUserPostsSuccessAction = ActionPayload<UserPostsActionType.FETCHED_USER_POSTS, PostTypes[]>
export type FetchUserAction = Action<UserPostsActionType.FETCHING_USER>
export type FetchUserSuccessAction = ActionPayload<UserPostsActionType.FETCHED_USER, AuthorTypes>
export type FetchUserPostsErrorAction = ActionPayload<UserPostsActionType.FETCHING_ERROR, boolean>


export type UserPostsAction = FetchUserPostsAction
                    | FetchUserPostsSuccessAction
                    | FetchUserAction
                    | FetchUserSuccessAction
                    | FetchUserPostsErrorAction;

type State = {
    posts: PostTypes[],
    user: AuthorTypes,
    loadingPosts: boolean,
    loadingUser: boolean,
    error: boolean,
}

const initialState: State = {
    posts: [],
    user: {id: 0, name: '0', email: 'a@a.a', address: {city: 'M', street: 'N', suite: ''}},
    loadingPosts: false,
    loadingUser: false,
    error: false,
}

export const UserPostsReducer = (state: State = initialState, action: UserPostsAction): State => {
    switch(action.type) {
        case UserPostsActionType.FETCHING_USER_POSTS: {
            return {
                ...state,
                loadingPosts: true,
            }
        }
        case UserPostsActionType.FETCHED_USER_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                loadingPosts: false
            }
        }
        case UserPostsActionType.FETCHING_USER: {
            return {
                ...state,
                loadingUser: true
            }
        }
        case UserPostsActionType.FETCHED_USER: {
            return {
                ...state,
                user: action.payload,
                loadingUser: false,
            }
        }
        case UserPostsActionType.FETCHING_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
        default:
            return state;
    }
}