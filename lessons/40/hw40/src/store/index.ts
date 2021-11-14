import { createStore, combineReducers, applyMiddleware } from "redux";
import {UserReducer} from 'store/UserReducer';
import { PostReducer} from './PostReducer';
import {PostDetailsReducer} from './PostDetatilReducer'
import {UserPostsReducer} from './UserPostsReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const RootReducer = combineReducers({
    users: UserReducer, 
    posts: PostReducer,
    postDetails: PostDetailsReducer,
    userPosts: UserPostsReducer
})

export type RootState = ReturnType <typeof RootReducer>;

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));