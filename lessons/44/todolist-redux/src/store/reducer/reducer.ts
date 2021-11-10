import { ActionPayload, TodoAction } from "../../types/todo";
import { v4 as uuidv4, v4 } from "uuid";

interface TodoItem {
  id: string;
  title: string;
  isDone: boolean;
}

type AddTodoAction = ActionPayload<TodoAction.ADD_TASK, TodoItem>;

export const addTodo = (title: string): AddTodoAction => ({
  type: TodoAction.ADD_TASK,
  payload: {
    id: v4(),
    title,
    isDone: false,
  },
});

type State = {
  items: TodoItem[];
};
const initialState = {
  items: [],
};
type TodoActions = AddTodoAction;
export const reducer = (state: State = initialState, action: TodoActions) => {
  switch (action.type) {
    case TodoAction.ADD_TASK:
      return {
        ...state,
        items: state.items.concat(action.payload),
      };

    default:
      return state;
  }
};
