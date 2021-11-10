export enum TodoAction {
  ADD_TODO = "ADD_TODO",
  EDIT_TODO = "EDIT_TODO",
  DELETE_TODO = "DELETE_TODO",
  DELETE_ALL = "DELETE_ALL",
  DELETE_DONE = "DELETE_DONE",
  SHOW_ALL = "SHOW_ALL",
  SHOW_DONE = "SHOW_DONE",
  SHOW_TODO = "SHOW_TODO",
}

export enum TodoFilter {
  ALL = "ALL",
  DONE = "DONE",
  TODO = "TODO",
}

export type TodoItem = {
  id: string;
  title: string;
  isDone: boolean;
};
