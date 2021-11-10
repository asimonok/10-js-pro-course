import { createStore, combineReducers } from 'redux'
import { tasksReducer } from './tasksReducer';
// import { todoListReducer } from './todoListReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export type RootState = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
// (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());