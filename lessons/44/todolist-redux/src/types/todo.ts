export interface TaskState {
  id: string;
  task: [string];
  done: boolean;
  edit: boolean;
}
export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}
export enum TaskActionTypes {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  EDIT_TASK = "EDIT_TASK",
}

// interface TaskAction {
//   type: string;
//   payload?: any;
// }

interface AddTask {
  type: TaskActionTypes.ADD_TASK;
  payload?: any;
}

interface RemoveTask {
  type: TaskActionTypes.REMOVE_TASK;
}

interface EditTask {
  type: TaskActionTypes.EDIT_TASK;
}

export type TaskAction = AddTask | RemoveTask | EditTask;
