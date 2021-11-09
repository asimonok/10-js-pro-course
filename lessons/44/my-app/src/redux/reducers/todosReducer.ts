import { Action, Reducer } from 'redux';
import { ActionType } from 'redux/actions/actionType';
import { Todo } from '../../constants/Todo';
import {
  AddTodoAction,
  CompleteTodoAction,
  EditTodoAction,
  DeleteTodoAction,
  DeleteDoneTodosAction,
  DeleteAllTodosAction,
} from 'redux/actions/actions';

export type TodosState = {
  items: Array<Todo>;
};

const initialState: TodosState = {
  items: [],
};

type ActionTypes =
  | AddTodoAction
  | CompleteTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | DeleteDoneTodosAction
  | DeleteAllTodosAction;

export const todosReducer: Reducer<TodosState, Action> = (
  state: TodosState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case ActionType.ADD_TODO: {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }

    case ActionType.COMPLETE_TODO: {
      return {
        ...state,
        items: state.items.map((item) => {
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

    case ActionType.EDIT_TODO: {
      return {
        ...state,
        items: state.items.map((item) => {
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

    case ActionType.DELETE_TODO: {
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };
    }

    case ActionType.DELETE_DONE_TODOS: {
      return {
        ...state,
        items: state.items.filter((item) => !item.isDone),
      };
    }

    case ActionType.DELETE_ALL_TODOS: {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
};
