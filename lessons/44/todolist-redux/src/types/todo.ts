// for reducerTODOS
export interface Todo {
  id: string;
  description: string;
  completed: boolean;
  edit: boolean;
}

//for reducer
export interface TaskState {
  id: string;
  items: string[];
  isDone: boolean;
  edit: boolean;
}
export enum TodoAction {
  ADD_TASK = "ADD_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  EDIT_TASK = "EDIT_TASK",
}

export type ActionPayload<TType, PType> = {
  type: TType;
  payload: PType;
};

// interface AddTask {
//   type: TodoAction.ADD_TASK;
//   payload?: any;
// }

// export type TodoActions = ActionPayload<TodoAction.ADD_TASK, string>
