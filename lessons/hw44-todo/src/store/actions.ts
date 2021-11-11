import {Task} from 'types/types'
import {v4} from 'uuid'

export enum TaskActionTypes {
    ADD = 'ADD_TASK',
    TOGGLE = 'TOGGLE_TASK',
    EDIT = 'EDIT_TASK',
    REMOVE = 'REMOVE_TASK',
    FILTER = "FILTER_TASKS",
    DELETE_ALL = "DELETE_ALL_TASKS",
    DELETE_DONE = "DELETE_DONE_TASKS"
}

export enum TaskFilter {
    ALL = "All",
    DONE = "Done",
    TODO = 'Todo',
}

export type ActionPayload <TypeAction, TypePayload> = {
type: TypeAction;
payload: TypePayload;
}

export type ActionDelete <TypeAction> = {
type: TypeAction;
}

export type AddTodoActions = ActionPayload<TaskActionTypes.ADD, Task>
export type ToogleTodoActions = ActionPayload<TaskActionTypes.TOGGLE, string>
export type EditTodoActions = ActionPayload<TaskActionTypes.EDIT, {id: string, title: string}>
export type RemoveTodoActions = ActionPayload<TaskActionTypes.REMOVE, string>
export type SetFilterAction = ActionPayload<TaskActionTypes.FILTER, TaskFilter>
export type DeleteAllAction = ActionDelete<TaskActionTypes.DELETE_ALL>
export type DeleteDoneAction = ActionDelete<TaskActionTypes.DELETE_DONE>

export const addTodo = (title: string): AddTodoActions => ({
    type: TaskActionTypes.ADD,
    payload:{
        id: v4(),
            title,
            isDone: false,
    }
})

export const toggleTodo = (id: string): ToogleTodoActions=> ({
    type: TaskActionTypes.TOGGLE,
    payload: id,
})

export const editTodo = (id: string, title: string): EditTodoActions=> ({
    type: TaskActionTypes.EDIT,
    payload: {
        id, 
        title
    }
})

export const removeTodo = (id: string): RemoveTodoActions=> ({
    type: TaskActionTypes.REMOVE,
    payload: id

})

export const filterTodo = (filter: TaskFilter): SetFilterAction=> ({
    type: TaskActionTypes.FILTER,
    payload: filter
})

export const deleteAllTodo = (): DeleteAllAction=> ({ type: TaskActionTypes.DELETE_ALL });

export const deleteDoneTodo = (): DeleteDoneAction=> ({ type: TaskActionTypes.DELETE_DONE });

