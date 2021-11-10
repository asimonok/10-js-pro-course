import {TaskActionTypes,
        AddTodoActions,
        ToogleTodoActions,
        EditTodoActions,
        RemoveTodoActions
     } from 'types/types'
import {v4} from 'uuid'


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