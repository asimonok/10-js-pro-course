import { ActionPayload } from './model';
import {v4} from 'uuid';

enum TodoAction {
    Add = 'ADD_TASK',
    Toggle = 'TOGGLE_TAsK',
    Edit = 'EDIT_TASK',
    Remove = 'REMOVE_TASK',
    Filter = "FILTER_TASKS",
    Delete_All = "DELETE_ALL_TASKS",
    Delete_Done = "DELETE_DONE_TASKS"
}

export enum TodoFilter {
    All = "All",
    Done = "Done",
    Todo = 'Todo',
}

let items: Array<TodoItem> = [];
interface TodoItem {
    id: string;
    title: string;
    isDone: boolean;
}

type State = {
    items: Array<TodoItem>,
    filter: TodoFilter;
}


const initialState: State = {
    items: items,
    filter: TodoFilter.All,
}

type AddTodoAction = ActionPayload<TodoAction.Add, TodoItem> 
type ToggleTodoAction = ActionPayload<TodoAction.Toggle, string> 
type EditTodoAction = ActionPayload<TodoAction.Edit, {id: string, title: string}> 
type RemoveTodoActions = ActionPayload<TodoAction.Remove, string>
type SetFilterAction = ActionPayload<TodoAction.Filter, TodoFilter>
type DeleteAllAction = ActionDelete<TodoAction.Delete_All>
type DeleteDoneAction = ActionDelete<TodoAction.Delete_Done>

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

export const filterTodo = (filter: TodoFilter): SetFilterAction=> ({
    type: TodoAction.Filter,
    payload: filter
})

export const deleteTodo = (id: string): RemoveTodoActions => ({
    type: TodoAction.Remove,
    payload: id,
  });
  

export const deleteAllTodo = (): DeleteAllAction=> ({ type: TodoAction.Delete_All });

export const deleteDoneTodo = (): DeleteDoneAction=> ({ type: TodoAction.Delete_Done });

type ActionDelete <TypeAction> = {
    type: TypeAction;
}

type TodoActions = AddTodoAction | ToggleTodoAction | EditTodoAction | RemoveTodoActions | SetFilterAction | DeleteAllAction | DeleteDoneAction; 

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
        case TodoAction.Remove: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        }
        case TodoAction.Filter: {
            return {
                ...state,
                filter: action.payload
            };
        }
        case TodoAction.Delete_All: {
            return {
                ...state,
                items: []
            }
        }
        case TodoAction.Delete_Done: {
            return {
                ...state,
                items: state.items.filter(item => !item.isDone)            }
        }
        default: 
           return state;    
    }
}

