import { TaskAction, TaskActionTypes, TaskState } from "../../types/todo";
import { v4 as uuidv4, v4 } from "uuid";

const defaultState: TaskState = {
  task: [""],
  done: false,
  edit: false,
  id: uuidv4(),
};
export const reducer = (state = defaultState, action: TaskAction): TaskState => {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK:
      return { ...state, task: state + action.payload };
    case TaskActionTypes.REMOVE_TASK:
      return {
        ...state,
        // task: state.task.filter((task) => {
        //   task.id !== action.payload.id;
        // }),
      };
    case TaskActionTypes.EDIT_TASK:

    default:
      return state;
  }
};
