import {Task, TaskActionTypes, AddTodoActions} from 'types/types'
import {v4} from 'uuid'


export const addTodo = (title: string): AddTodoActions => ({
    type: TaskActionTypes.ADD,
    payload:{
        id: v4(),
            title,
            isDone: false,
    }
})