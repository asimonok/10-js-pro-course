import { todosReducer } from './todosReducer';
import {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo,
  setFilter,
  deleteDoneTodos,
  deleteAllTodos,
} from '../actions/todoActions';
import { FilterType } from '../models/filterType';

describe('Todos reducer', () => {
  it('Add', () => {
    const initialState = {
      items: [],
      filter: FilterType.ALL,
    };
    const action = addTodo('added todo');
    const result = todosReducer(initialState, action);
    expect(result !== initialState).toBeTruthy();
    expect(result.items.length).toEqual(1);
    expect(result.items[0]).toEqual(action.payload);
  });

  it('Complete', () => {
    const initialState = {
      items: [
        { id: '1', title: 'title', isDone: false },
        { id: '2', title: 'title2', isDone: false },
      ],
      filter: FilterType.ALL,
    };
    const action = completeTodo('1');
    const result = todosReducer(initialState, action);
    expect(result.items[0].isDone).toBeTruthy();
    expect(result.items[1].isDone).toBeFalsy();
    const result2 = todosReducer(result, action);
    expect(result2.items[0].isDone).toBeFalsy();
  });

  it('Edit', () => {
    const initialState = {
      items: [
        { id: '1', title: 'title', isDone: false },
        { id: '2', title: 'title2', isDone: false },
      ],
      filter: FilterType.ALL,
    };
    const action = editTodo('1', 'updated title');
    const result = todosReducer(initialState, action);
    expect(result.items[0].title).toEqual('updated title');
  });

  it('Delete', () => {
    const initialState = {
      items: [
        { id: '1', title: 'title', isDone: false },
        { id: '2', title: 'title2', isDone: false },
      ],
      filter: FilterType.ALL,
    };
    const action = deleteTodo('1');
    const result = todosReducer(initialState, action);
    expect(result.items.length).toEqual(1);
    expect(result.items.find(({ id }) => id === '1')).not.toBeDefined();
  });

  it('Delete done', () => {
    const initialState = {
      items: [
        { id: '1', title: 'title', isDone: true },
        { id: '2', title: 'title2', isDone: false },
      ],
      filter: FilterType.ALL,
    };
    const action = deleteDoneTodos();
    const result = todosReducer(initialState, action);
    expect(result.items.filter(({ isDone }) => isDone === true).length).toEqual(
      0
    );
  });

  it('Delete all', () => {
    const initialState = {
      items: [
        { id: '1', title: 'title', isDone: false },
        { id: '2', title: 'title2', isDone: false },
      ],
      filter: FilterType.ALL,
    };
    const action = deleteAllTodos();
    const result = todosReducer(initialState, action);
    expect(result.items.length).toEqual(0);
  });

  it('SetFilter', () => {
    const initialState = {
      items: [],
      filter: FilterType.ALL,
    };
    expect(
      todosReducer(initialState, setFilter(FilterType.TODO)).filter
    ).toEqual(FilterType.TODO);
    expect(
      todosReducer(initialState, setFilter(FilterType.DONE)).filter
    ).toEqual(FilterType.DONE);
  });

  it('No action', () => {
    const initialState = {
      items: [],
      filter: FilterType.ALL,
    };
    expect(
      todosReducer(initialState, { action: 'test' }) === initialState
    ).toBeTruthy();
  });

  it('No state', () => {
    const result = todosReducer(undefined, { action: 'test' });
    expect(result).toEqual({
      items: [],
      filter: FilterType.ALL,
    });
  });
});
