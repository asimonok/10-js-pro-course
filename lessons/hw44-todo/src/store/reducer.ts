import {Task, TaskActionTypes, taskAction  } from '../types/types'


const initialState: Task = {
    taskName: ' ',
    isDone: false,
    isActive: true,
}

export const taskReducer = (state = initialState, action: taskAction): Task => {
    switch (action.type) {
        case TaskActionTypes.ADD_TODO: 
            return {
                ...state,
                taskName: '',
                isDone: false,
                isActive: true,
            }
        case TaskActionTypes.DANE_TODO: 
            return {
                ...state,
                taskName: '',
                isDone: true,
                isActive: false,
            }    
        default: 
            return state;    
    }
}
  
