import {Data, Action, taskAction  } from '../types/Data';

const initialState: Data = {
    id: 0,
    task: ' ',
    isDone: false,
    isActive: true,
}

export const taskReducer = (state = initialState, action: taskAction): Data => {
    switch (action.type) {
        case Action.ADD_TASK: 
            return {
                ...state,
                task: '',
                isDone: false,
                isActive: true,
            }
        case Action.DONE_TODO: 
            return {
                ...state,
                task: '',
                isDone: true,
                isActive: false,
            }    
        default: 
            return state;    
    }
}