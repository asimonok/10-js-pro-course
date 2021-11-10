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
    EDIT = 'EDIT_TASK'
}


// export type ActionPayload <TypeAction, TypePayload> = {
//     type: TaskActionTypes.ADD;
//     payload?:any;
// }

export type ActionPayload <TypeAction, TypePayload> = {
type: TypeAction;
payload: TypePayload;
}

// interface AddTodoAction {
// type: TaskActionTypes.ADD;
// payload?: Task; 
// }
// export type taskActions = AddTodoActions;

// the same in one string
// type TodoActions = ActionPayload<TaskActionTypes.ADD, string>

export type AddTodoActions = ActionPayload<TaskActionTypes.ADD, Task>


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







