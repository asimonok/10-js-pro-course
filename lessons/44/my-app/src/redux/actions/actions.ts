import { Action } from 'redux';
import { ActionPayload } from 'redux/models/ActionPayload';
import { ActionType } from './actionType';
import { FilterType } from './filterType';
import { Todo } from 'constants/Todo';
import { v4 as uuid } from 'uuid';

export type AddTodoAction = ActionPayload<ActionType.ADD_TODO, Todo>;
export type CompleteTodoAction = ActionPayload<
  ActionType.COMPLETE_TODO,
  string
>;
export type EditTodoAction = ActionPayload<
  ActionType.EDIT_TODO,
  { id: string; title: string }
>;
export type DeleteTodoAction = ActionPayload<ActionType.DELETE_TODO, string>;
export type DeleteDoneTodosAction = Action<ActionType.DELETE_DONE_TODOS>;
export type DeleteAllTodosAction = Action<ActionType.DELETE_ALL_TODOS>;
export type SetFilterAction = ActionPayload<ActionType.SET_FILTER, FilterType>;

export const addTodo = (title: string): AddTodoAction => ({
  type: ActionType.ADD_TODO,
  payload: {
    id: uuid(),
    title,
    isDone: false,
  },
});

export const completeTodo = (id: string): CompleteTodoAction => ({
  type: ActionType.COMPLETE_TODO,
  payload: id,
});

export const editTodo = (id: string, title: string): EditTodoAction => ({
  type: ActionType.EDIT_TODO,
  payload: {
    id,
    title,
  },
});

export const deleteTodo = (id: string): DeleteTodoAction => ({
  type: ActionType.DELETE_TODO,
  payload: id,
});

export const deleteDoneTodos = (): DeleteDoneTodosAction => ({
  type: ActionType.DELETE_DONE_TODOS,
});

export const deleteAllTodos = (): DeleteAllTodosAction => ({
  type: ActionType.DELETE_ALL_TODOS,
});

export const setFilter = (filter: FilterType): SetFilterAction => ({
  type: ActionType.SET_FILTER,
  payload: filter,
});
