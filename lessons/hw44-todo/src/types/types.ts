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
    FILTER = "FILTER_TASKS",
    DELETEALL = "DELETE_ALL_TASKS",
    DELETEDONE = "DELETE_DONE_TASKS"
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
export type DeleteAllAction = ActionDelete<TaskActionTypes.DELETEALL>
export type DeleteDoneAction = ActionDelete<TaskActionTypes.DELETEDONE>

export type taskActions = AddTodoActions 
    | ToogleTodoActions
    | EditTodoActions
    | RemoveTodoActions
    | SetFilterAction
    | DeleteAllAction
    | DeleteDoneAction;








