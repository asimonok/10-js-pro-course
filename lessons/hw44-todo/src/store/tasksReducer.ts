import {Task, AddTodoActions, TaskActionTypes} from 'types/types';
import {Reducer} from 'redux' 
import {RootState} from 'store';

export type State = {
    items: Task[];
}

const initialState:State = {
    items: []
    // todoList: [{taskName: 'hohoho', isActive: true, isDone: false}, {taskName: 'ohohoh', isActive: true, isDone: false}]
}

// Reducer<TodosState, ReducerAction> = (state: TodosState = initialState, action: ReducerAction)

export const tasksReducer = (state: State = initialState, action: AddTodoActions ) => {
    switch(action.type) {
        case TaskActionTypes.ADD: {
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            };
        }
        default:
            return state;
    }
}



// export const todoListReducer = (state = initialState, action: todoListAction): TaskList => {
//     switch (action.type) {
//         case todoListActionTypes.ADD_TODO: 
//             return { ...state, todoList: [...state.todoList, action.payload]
//             }
            
//         case todoListActionTypes.DELETE_TODO: 
//             return { ...state, todoList: state.todoList.filter(todo => todo.taskName !== action.payload)};
//         }    
//         default: 
//             return state;    
//     }
// }


// todos: state.todos.filter(todo => todo.id !== action.payload)
