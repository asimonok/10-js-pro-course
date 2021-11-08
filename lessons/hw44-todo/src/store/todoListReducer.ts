import {todoListActionTypes, TaskList, todoListAction} from 'types/types';


const initialState: TaskList = {
    todoList: [{taskName: 'hohoho', isActive: true, isDone: false}, {taskName: 'ohohoh', isActive: true, isDone: false}]
}


export const todoListReducer = (state = initialState, action: todoListAction): TaskList => {
    switch (action.type) {
        case todoListActionTypes.ADD_TODO: 
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        default: 
            return state;    
    }
}