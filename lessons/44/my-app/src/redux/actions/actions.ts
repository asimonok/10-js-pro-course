import { Action } from 'redux';
import { ActionPayload } from 'redux/models/ActionPayload';
import { ActionType } from './actionType';
import { Todo } from 'constants/Todo';

export type AddTodoAction = ActionPayload<ActionType.ADD_TODO, Todo>;
export type CompleteTodoAction = ActionPayload<
  ActionType.COMPLETE_TODO,
  number
>;
export type EditTodoAction = ActionPayload<
  ActionType.EDIT_TODO,
  { id: number; title: string }
>;
export type DeleteTodoAction = ActionPayload<ActionType.DELETE_TODO, number>;
export type DeleteDoneTodosAction = Action<ActionType.DELETE_DONE_TODOS>;
export type DeleteAllTodosAction = Action<ActionType.DELETE_ALL_TODOS>;

export const addTodo = (title: string): AddTodoAction => ({
  type: ActionType.ADD_TODO,
  payload: {
    id: Date.now(),
    title,
    isDone: false,
  },
});

export const completeTodo = (id: number): CompleteTodoAction => ({
  type: ActionType.COMPLETE_TODO,
  payload: id,
});

export const editTodo = (id: number, title: string): EditTodoAction => ({
  type: ActionType.EDIT_TODO,
  payload: {
    id,
    title,
  },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: ActionType.DELETE_TODO,
  payload: id,
});

export const deleteDoneTodos = (): DeleteDoneTodosAction => ({
  type: ActionType.DELETE_DONE_TODOS,
});

export const deleteAllTodos = (): DeleteAllTodosAction => ({
  type: ActionType.DELETE_ALL_TODOS,
});

/* export const setFilter = (filter: any) => ({
  type: ActionType.SET_FILTER,
  payload: { filter },
}); */
