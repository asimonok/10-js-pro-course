import { createStore } from 'redux'
import { taskReducer } from './reducer';

export const store = createStore(taskReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__());