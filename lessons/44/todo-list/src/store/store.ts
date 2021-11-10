import { createStore, combineReducers } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todosReducer } from '../store/reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools()
);