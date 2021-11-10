import { createStore } from 'redux'
import { todosReducer } from './reducer';

export const store = createStore(todosReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__());