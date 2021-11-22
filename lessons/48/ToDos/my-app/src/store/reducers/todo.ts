import { v4 } from "uuid";
import { ActionPayload, TodoFilter } from "store/model";
import { TodoItem } from "common/todo";
import { Action } from "redux";

export enum TodoAction {
  Add = "todos/ADD",
  Toggle = "todos/TOGGLE",
  Edit = "todos/EDIT",
  Remove = "todos/REMOVE",
  SetFilter = "todos/SET_FILTER",
  RemoveAll = "todos/REMOVE_ALL",
  RemoveDone = "todos/REMOVE_DONE",
}

//actions:

type AddTodoAction = ActionPayload<TodoAction.Add, TodoItem>;
type ToggleTodoAction = ActionPayload<TodoAction.Toggle, string>;
type EditTodoAction = ActionPayload<
  TodoAction.Edit,
  { id: string; title: string }
>;
type RemoveTodoAction = ActionPayload<TodoAction.Remove, string>;
type SetFilterAction = ActionPayload<TodoAction.SetFilter, TodoFilter>;
type RemoveAllTodoAction = Action<TodoAction.RemoveAll>;
type RemoveDoneTodoAction = Action<TodoAction.RemoveDone>;

//actioncreaters:
export const addTodo = (title: string): AddTodoAction => ({
  type: TodoAction.Add,
  payload: { id: v4(), title, isDone: false },
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
  type: TodoAction.Toggle,
  payload: id,
});

export const editTodo = (id: string, title: string): EditTodoAction => ({
  type: TodoAction.Edit,
  payload: { id, title },
});

export const removeTodo = (id: string): RemoveTodoAction => ({
  type: TodoAction.Remove,
  payload: id,
});

export const setFilter = (filter: TodoFilter): SetFilterAction => ({
  type: TodoAction.SetFilter,
  payload: filter,
});

export const removeAllTodo = (): RemoveAllTodoAction => ({
  type: TodoAction.RemoveAll,
});

export const removeDoneTodo = (): RemoveDoneTodoAction => ({
  type: TodoAction.RemoveDone,
});

type State = {
  items: TodoItem[];
  filter: TodoFilter;
};

const initialState = {
  items: [],
  filter: TodoFilter.All,
};

//actions:
type TodoActions =
  | AddTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | RemoveTodoAction
  | SetFilterAction
  | RemoveAllTodoAction
  | RemoveDoneTodoAction;

export const todosReducer = (
  state: State = initialState,
  action: TodoActions
) => {
  switch (action.type) {
    case TodoAction.Add: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }
    case TodoAction.Toggle: {
      return {
        ...state,
        items: state.items.map((item: TodoItem) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isDone: !item.isDone,
            };
          }
          return item;
        }),
      };
    }
    case TodoAction.Edit: {
      return {
        ...state,
        items: state.items.map((item: TodoItem) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
            };
          }
          return item;
        }),
      };
    }
    case TodoAction.Remove: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case TodoAction.SetFilter: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case TodoAction.RemoveAll: {
      return {
        ...state,
        items: [],
      };
    }
    case TodoAction.RemoveDone: {
      return {
        ...state,
        items: state.items.filter((item) => !item.isDone),
      };
    }

    default: {
      return state;
    }
  }
};
