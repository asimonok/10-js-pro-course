import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { todosReducer } from '../reducers/todosReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const globalWindow = window as any;

export const store = createStore(
  rootReducer,
  globalWindow.__REDUX_DEVTOOLS_EXTENSION__ &&
    globalWindow.__REDUX_DEVTOOLS_EXTENSION__()
);
