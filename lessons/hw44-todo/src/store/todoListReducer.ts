import {TaskActionTypes, TaskList, taskAction} from 'types/types';


const initialState: TaskList = {
    todoList: [{taskName: 'hohoho', isActive: true, isDone: false}, {taskName: 'ohohoh', isActive: true, isDone: false}]
}


export const todoListReducer = (state = initialState, action: taskAction): TaskList => {
    switch (action.type) {
        case TaskActionTypes.ADD_TASK: 
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
            
        case TaskActionTypes.DANE_TASK: 
            return {
            ...state,
            todoList: [...state.todoList, action.payload]
        }    
        default: 
            return state;    
    }
}