import { createStore, combineReducers, applyMiddleware } from 'redux'
import { tasksReducer } from './tasksReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from 'store/middleware/logger'
import {permanent} from 'store/middleware/permanent'
import { initialState } from './tasksReducer';
import { TaskFilter } from './actions';

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export type RootState = ReturnType<typeof rootReducer>

const preloadedState = JSON.parse(localStorage.getItem('state') || '') ;

export const store = createStore(
    rootReducer,
    preloadedState,
     composeWithDevTools(applyMiddleware(logger, permanent)));



    //  { 
    //     tasks: {
    //         items: [{id: '123', title: 'text', isDone: true}],
    //         filter: TaskFilter.DONE
    //     }

    // }