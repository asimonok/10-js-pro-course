import { createStore, combineReducers, applyMiddleware } from "redux";
import {UserReducer} from './UserReducer';
import { PostReducer} from './PostReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const RootReducer = combineReducers({
    users: UserReducer, 
    posts: PostReducer,
})

export type RootState = ReturnType <typeof RootReducer>;

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));