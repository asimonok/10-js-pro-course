export interface Task {
    taskName: string;
    isDone: boolean;
    isActive: boolean;
}

export enum TaskActionTypes {
    ADD_TODO = 'ADD_TODO',
    DANE_TODO = ' DANE_TODO'
}

interface AddTodoAction {
    type: TaskActionTypes.ADD_TODO;
    payload?: any; 
}
interface DaneTodoAction {
    type: TaskActionTypes.DANE_TODO;
    payload?: any; 
}

export type taskAction = AddTodoAction | DaneTodoAction;

