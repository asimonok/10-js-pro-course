import {Task, TaskActionTypes, taskAction  } from '../types/types'


const initialState: Task = {
    taskName: '',
    isDone: false,
    isActive: true,
}


export const taskReducer = (state = initialState, action: taskAction): Task => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK: 
            return {
                ...state,
                taskName: action.payload.taskName,
                isActive: true,
            }
        case TaskActionTypes.DANE_TASK: 
            return {
                ...state,
                isDone: true,
                isActive: false
            }    
        default: 
            return state;    
    }
}

  

