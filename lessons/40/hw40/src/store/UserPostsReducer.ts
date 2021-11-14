import {Post, User} from 'types/types'
import {UserPostsActionType} from './actions/userPosts'
import {Action} from 'redux'

export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchUserPostsAction = Action<UserPostsActionType.FETCH_USER_POSTS>
export type FetchUserPostsSuccessAction = ActionPayload<UserPostsActionType.FETCH_USER_POSTS_SUCCESS, Post[]>
export type FetchUserAction = Action<UserPostsActionType.FETCH_USER>
export type FetchUserSuccessAction = ActionPayload<UserPostsActionType.FETCH_USER_SUCCESS, User>
export type FetchUserPostsErrorAction = ActionPayload<UserPostsActionType.FETCH_USER_POSTS_ERROR, boolean>


export type UserPostsAction = FetchUserPostsAction
                    | FetchUserPostsSuccessAction
                    | FetchUserAction
                    | FetchUserSuccessAction
                    | FetchUserPostsErrorAction;

type State = {
    posts: Post[],
    user: User,
    loadingPosts: boolean,
    loadingUser: boolean,
    error: boolean,
}

const initialState: State = {
    posts: [],
    user: {id: 1, name: '1', email: '1@1', address: {city: '1', street: '11', suite: '111'}},
    loadingPosts: false,
    loadingUser: false,
    error: false,
}

export const UserPostsReducer = (state: State = initialState, action: UserPostsAction): State => {
    switch(action.type) {
        case UserPostsActionType.FETCH_USER_POSTS: {
            return {
                ...state,
                loadingPosts: true,
            }
        }
        case UserPostsActionType.FETCH_USER_POSTS_SUCCESS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                loadingPosts: false
            }
        }
        case UserPostsActionType.FETCH_USER: {
            return {
                ...state,
                loadingUser: true
            }
        }
        case UserPostsActionType.FETCH_USER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                loadingUser: false,
            }
        }
        case UserPostsActionType.FETCH_USER_POSTS_ERROR: {
            return {
                ...state,
                error: action.payload,
            }
        }
    }
    return state;
}