export interface Task {
    id: string;
    title: string;
    isDone: boolean;
}

export interface TaskList {
    todoList: Task[];
}


export enum TaskActionTypes {
    ADD = 'ADD_TASK',
    TOGGLE = 'TOGGLE_TASK',
    EDIT = 'EDIT_TASK',
    REMOVE = 'REMOVE_TASK',
}

export type ActionPayload <TypeAction, TypePayload> = {
type: TypeAction;
payload: TypePayload;
}

export type AddTodoActions = ActionPayload<TaskActionTypes.ADD, Task>
export type ToogleTodoActions = ActionPayload<TaskActionTypes.TOGGLE, string>
export type EditTodoActions = ActionPayload<TaskActionTypes.EDIT, {id: string, title: string}>
export type RemoveTodoActions = ActionPayload<TaskActionTypes.REMOVE, string>

export type taskActions = AddTodoActions 
                        | ToogleTodoActions
                        | EditTodoActions
                        | RemoveTodoActions;

// interface DaneTodoAction {
//     type: TaskActionTypes.DANE_TASK;
//     payload?: any; 
// }




export enum todoListActionTypes {
ADD_TODO = 'ADD_TODO',
DELETE_TODO = 'DELETE_TODO'
}

interface  ADDtodoListAction {
type: todoListActionTypes.ADD_TODO;
payload?: any; 
}
interface  DeletetodoListAction {
type: todoListActionTypes.DELETE_TODO;
payload?: any; 
}

export type todoListAction = ADDtodoListAction | DeletetodoListAction;







