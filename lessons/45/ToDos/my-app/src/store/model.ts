export type ActionPayload<TType = any, PType = any> = {
  type: TType;
  payload: PType;
};

export enum TodoFilter {
  All = "All",
  Done = "Done",
  Todo = "Todo",
}

export enum TodoAction {
  Add = "todos/ADD",
  Toggle = "todos/TOGGLE",
  Edit = "todos/EDIT",
  Remove = "todos/REMOVE",
  SetFilter = "todos/SET_FILTER",
  RemoveAll = "todos/REMOVE_ALL",
  RemoveDone = "todos/REMOVE_DONE",
}
