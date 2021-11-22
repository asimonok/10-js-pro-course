export type Data = {
    id: number,
    task: string;
    isDone: boolean;
    isActive?: boolean;
};

export enum Action {
    ADD_TASK = 'ADD_TASK',
    DONE_TODO = 'DONE_TODO',
    DELETE_TODO = 'DELETE_TODO',
    DELETE_ALL = 'DELETE_ALL',
    DELETE_DONE = 'DELETE_DONE',
  }

interface AddAction {
    type: Action.ADD_TASK;
    payload?: any; 
}
interface DoneAction {
    type: Action.DONE_TODO;
    payload?: any; 
}

export type taskAction = AddAction | DoneAction;