export interface TaskState {
  task: string;
  done: boolean;
  edit: boolean;
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
}

interface RemoveTask {
  type: TaskActionTypes.REMOVE_TASK;
}

interface EditTask {
  type: TaskActionTypes.EDIT_TASK;
}

export type TaskAction = AddTask | RemoveTask | EditTask;
