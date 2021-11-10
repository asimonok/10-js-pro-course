import { Action, Reducer } from "redux";
import { TodoItem, TodoAction, TodoFilter } from "../types";
import { ActionPayload } from "../model";
import { v4 as uuid } from "uuid";

export type State = {
  todos: TodoItem[];
  filter: TodoFilter;
};

const initialState: State = {
  todos: [],
  filter: TodoFilter.ALL,
};

type AddTodoAction = ActionPayload<TodoAction.ADD_TODO, TodoItem>;
type EditTodoAction = ActionPayload<TodoAction.EDIT_TODO, TodoItem>;
type DeleteTodoAction = ActionPayload<TodoAction.DELETE_TODO, string>;
type DeleteAllTodosAction = Action<TodoAction.DELETE_ALL>;
type DeleteDoneTodosAction = Action<TodoAction.DELETE_DONE>;
type ShowAllFilterAction = Action<TodoAction.SHOW_ALL>;
type ShowDoneFilterAction = Action<TodoAction.SHOW_DONE>;
type ShowTodoFilterAction = Action<TodoAction.SHOW_TODO>;

export const addTodo = (title: string): AddTodoAction => ({
  type: TodoAction.ADD_TODO,
  payload: {
    id: uuid(),
    title,
    isDone: false,
  },
});

export const editTodo = (editedTodo: TodoItem): EditTodoAction => ({
  type: TodoAction.EDIT_TODO,
  payload: editedTodo,
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: TodoAction.DELETE_TODO,
  payload: id,
});

export const deleteAllTodos = (): DeleteAllTodosAction => ({
  type: TodoAction.DELETE_ALL,
});

export const deleteDoneTodos = (): DeleteDoneTodosAction => ({
  type: TodoAction.DELETE_DONE,
});

type ReducerAction =
  | AddTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | DeleteAllTodosAction
  | DeleteDoneTodosAction
  | ShowAllFilterAction
  | ShowDoneFilterAction
  | ShowTodoFilterAction;

export const todosReducer: Reducer<State, ReducerAction> = (
  state: State = initialState,
  action: ReducerAction
) => {
  switch (action.type) {
    case TodoAction.ADD_TODO: {
      const newTodos = {
        ...state,
        todos: [...state.todos, action.payload],
      };

      return newTodos;
    }

    case TodoAction.EDIT_TODO: {
      const newTodos = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.payload.id ? todo : { ...action.payload }
        ),
      };

      return newTodos;
    }

    case TodoAction.DELETE_TODO: {
      const newTodos = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

      return newTodos;
    }

    case TodoAction.DELETE_DONE: {
      const newTodos = {
        ...state,
        todos: state.todos.filter((todo) => !todo.isDone),
      };

      return newTodos;
    }

    case TodoAction.DELETE_ALL: {
      return {
        ...state,
        todos: [],
      };
    }
    case TodoAction.SHOW_ALL: {
      return {
        ...state,
        filter: TodoFilter.ALL,
      };
    }

    case TodoAction.SHOW_DONE: {
      return {
        ...state,
        filter: TodoFilter.DONE,
      };
    }

    case TodoAction.SHOW_TODO: {
      return {
        ...state,
        filter: TodoFilter.TODO,
      };
    }

    default: {
      return state;
    }
  }
};
