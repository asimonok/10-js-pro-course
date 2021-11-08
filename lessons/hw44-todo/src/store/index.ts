import { createStore, combineReducers } from 'redux'
import { taskReducer } from './taskReducer';
import { todoListReducer } from './todoListReducer';

const rootReducer = combineReducers({
    taskReducer,
    todoListReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
(window as any).__REDUX_DEVTOOLS_EXTENSION__());