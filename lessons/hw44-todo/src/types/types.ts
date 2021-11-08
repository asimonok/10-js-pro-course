export interface Task {
    taskName: string;
    isDone: boolean;
    isActive: boolean;
}
export interface TaskList {
    todoList: Task[];
}

export enum TaskActionTypes {
    ADD_TASK = 'ADD_TASK',
    DANE_TASK = 'DANE_TASK'
}

interface AddTodoAction {
    type: TaskActionTypes.ADD_TASK;
    payload?: any; 
}
interface DaneTodoAction {
    type: TaskActionTypes.DANE_TASK;
    payload?: any; 
}
export type taskAction = AddTodoAction | DaneTodoAction;




// export enum todoListActionTypes {
//     ADD_TODO = 'ADD_TODO',
//     DELETE_TODO = 'DELETE_TODO'
// }

// interface  ADDtodoListAction {
//     type: todoListActionTypes.ADD_TODO;
//     payload?: any; 
// }
// interface  DeletetodoListAction {
//     type: todoListActionTypes.DELETE_TODO;
//     payload?: any; 
// }

// export type todoListAction = ADDtodoListAction | DeletetodoListAction;



