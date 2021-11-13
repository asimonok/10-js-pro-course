import {User} from 'types/types'
import {UserActionType} from './actions/users'
import {Action} from 'redux'



export type ActionPayload <TypeAction, TypePayload> = {
    type: TypeAction;
    payload: TypePayload;
}

export type FetchUserAction = Action<UserActionType.FETCH_USERS>
export type FetchSuccessUserAction = ActionPayload<UserActionType.FETCH_USERS_SUCCESS, User[]>

export type UserAction = FetchUserAction
            |FetchSuccessUserAction;


type State = {
    users: User[],
    loading: boolean,
    error: string

}

const initialState: State = {
    users: [],
    loading: false,
    error: ''
}

export const UserReducer = (state: State = initialState, action: UserAction): State => {
    switch(action.type) {
        case UserActionType.FETCH_USERS: {
            return {
                ...state,
                users: [],
                loading: true,
            }
        }
        case UserActionType.FETCH_USERS_SUCCESS: {
            return {
                ...state,
                users: [...state.users, ...action.payload],
                loading: false
            }
        }
    }
    return state;
}