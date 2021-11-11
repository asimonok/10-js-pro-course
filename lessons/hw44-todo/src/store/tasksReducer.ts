import {Task} from 'types/types';
import {TaskActionTypes, TaskFilter} from 'store/actions' 
import {AddTodoActions,
    ToogleTodoActions,
    EditTodoActions,
    RemoveTodoActions,
    SetFilterAction,
    DeleteAllAction,
    DeleteDoneAction
} from 'store/actions'

type taskActions = AddTodoActions 
    | ToogleTodoActions
    | EditTodoActions
    | RemoveTodoActions
    | SetFilterAction
    | DeleteAllAction
    | DeleteDoneAction;


export type State = {
    items: Task[];
    filter: TaskFilter;
}

export const initialState:State = {
    items: [],
    filter: TaskFilter.ALL,
}

export const tasksReducer = (state: State = initialState, action: taskActions ) => {
    switch(action.type) {
        case TaskActionTypes.ADD: {
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            };
        }
        case TaskActionTypes.TOGGLE: {
            return {
                ...state,
                items: state.items.map(item => {
                    if( item.id === action.payload) {
                        return {
                            ...item,
                            isDone: !item.isDone,
                        }
                    }
                    return item
                } )
            }
        }
        case TaskActionTypes.EDIT: {
            return {
                ...state,
                items: state.items.map(item => {
                    if(item.id === action.payload.id) {
                        return {
                            ...item,
                            title: action.payload.title
                        }
                    }
                    return item
                })
                
            }
        }
        case TaskActionTypes.REMOVE: {
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        }
        case TaskActionTypes.FILTER: {
            return {
                ...state,
                filter: action.payload
            };
        }
        case TaskActionTypes.DELETE_ALL: {
            return {
                ...state,
                items: []
            }
        }
        case TaskActionTypes.DELETE_DONE: {
            return {
                ...state,
                items: state.items.filter(item => !item.isDone)            }
        }
        default:
            return state;
    }
}


