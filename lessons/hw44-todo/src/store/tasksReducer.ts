import {Task, TaskActionTypes, taskActions} from 'types/types';
import {Reducer} from 'redux' 
import {RootState} from 'store';
import { strictEqual } from 'assert';

export type State = {
    items: Task[];
}

const initialState:State = {
    items: []
    // todoList: [{taskName: 'hohoho', isActive: true, isDone: false}, {taskName: 'ohohoh', isActive: true, isDone: false}]
}

// Reducer<TodosState, ReducerAction> = (state: TodosState = initialState, action: ReducerAction)

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
        
        default:
            return state;
    }
}


