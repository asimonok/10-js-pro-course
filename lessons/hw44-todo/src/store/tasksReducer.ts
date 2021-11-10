import {Task, TaskActionTypes, taskActions, TaskFilter} from 'types/types';

export type State = {
    items: Task[];
    filter: TaskFilter;
}

const initialState:State = {
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
        case TaskActionTypes.DELETEALL: {
            return {
                ...state,
                items: []
            }
        }
        case TaskActionTypes.DELETEDONE: {
            return {
                ...state,
                items: state.items.filter(item => !item.isDone)            }
        }
        default:
            return state;
    }
}


