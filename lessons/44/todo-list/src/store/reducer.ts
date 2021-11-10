import { ActionPayload } from './model';
import {v4} from 'uuid';

enum TodoAction {
    Add = 'ADD_TASK',
    Toggle = 'TOGGLE_TSAK',
    Edit = 'EDIT_TASK'
}

interface TodoItem {
    id: string;
    title: string;
    isDone: boolean;
}

type AddTodoAction = ActionPayload<TodoAction.Add, TodoItem> 
type ToggleTodoAction = ActionPayload<TodoAction.Toggle, string> 
type EditTodoAction = ActionPayload<TodoAction.Edit, {id: string, title: string}> 

export const addTodo = (title: string): AddTodoAction => ({
    type: TodoAction.Add,
    payload: {
        id: v4(),
        title,
        isDone: false,
    },
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
    type: TodoAction.Toggle,
    payload: id,
})

export const editTodo = (id: string, title: string): EditTodoAction => ({
    type: TodoAction.Edit,
    payload: { id, title },
})

type State = {
    items: TodoItem[]
}

const initialState = {
    items: [],
}

type TodoActions = AddTodoAction | ToggleTodoAction | EditTodoAction; 

export const todosReducer = (state: State = initialState, action: TodoActions) => {
     switch (action.type) {
        case TodoAction.Add: {
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        }
        case TodoAction.Toggle : {
            return {
                ...state,
                items: state.items.map((item: TodoItem) => {
                   if (item.id === action.payload){
                       return {
                           ...item,
                           isDone: !item.isDone,
                       }
                   }
                   return item;
               })
            }    
        }
        case TodoAction.Edit : {
            return {
                ...state,
                items: state.items.map((item: TodoItem) => {
                   if (item.id === action.payload.id){
                       return {
                           ...item,
                           title: action.payload.title,
                       }
                   }
                   return item;
               })
            }    
        }
        default: 
           return state;    
    }
}

