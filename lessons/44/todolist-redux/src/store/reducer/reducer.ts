import { TaskAction, TaskActionTypes, TaskState } from "../../types/todo";

const defaultState: TaskState = {
  task: "",
  done: false,
  edit: false,
};

export const reducer = (state = defaultState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return { ...state };
    case TaskActionTypes.REMOVE_TASK:
      return { ...state };
    case TaskActionTypes.EDIT_TASK:
      return { ...state };
    default:
      return state;
  }
};
