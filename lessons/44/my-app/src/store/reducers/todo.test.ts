import {
  todosReducer,
  addTodo,
  editTodo,
  deleteTodo,
  deleteAllTodos,
  deleteDoneTodos,
  showAllFilterTodos,
  showDoneFilterTodos,
  showTodoFilterTodos,
} from "./todo";
import { TodoFilter } from "../types";

describe("Todos reducer", () => {
  it("ADD_TODO", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.ALL,
    };
    const action = addTodo("added todo");
    const result = todosReducer(initialState, action);
    expect(result !== initialState).toBeTruthy();
    expect(result.todos.length).toEqual(1);
    expect(result.todos[0]).toEqual(action.payload);
  });

  it("EDIT_TODO", () => {
    const initialState = {
      todos: [
        { id: "123", title: "learn react", isDone: false },
        { id: "456", title: "learn jest", isDone: false },
      ],
      filter: TodoFilter.ALL,
    };
    const result = todosReducer(
      initialState,
      editTodo({ id: "123", title: "updated title", isDone: false })
    );
    expect(result.todos[0].title).toEqual("updated title");
  });

  it("DELETE_TODO", () => {
    const initialState = {
      todos: [
        { id: "123", title: "learn react", isDone: false },
        { id: "456", title: "learn jest", isDone: false },
      ],
      filter: TodoFilter.ALL,
    };
    const result = todosReducer(initialState, deleteTodo("123"));
    expect(result.todos.length).toEqual(1);
    expect(result.todos.find(({ id }) => id === "123")).not.toBeDefined();
  });

  it("DELETE_ALL", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.ALL,
    };
    expect(todosReducer(initialState, deleteAllTodos()).filter).toEqual(
      TodoFilter.ALL
    );
  });

  it("DELETE_DONE", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.DONE,
    };
    expect(todosReducer(initialState, deleteDoneTodos()).filter).toEqual(
      TodoFilter.DONE
    );
  });

  it("SHOW_ALL", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.ALL,
    };
    expect(todosReducer(initialState, showAllFilterTodos()).filter).toEqual(
      TodoFilter.ALL
    );
  });

  it("SHOW_DONE", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.DONE,
    };
    expect(todosReducer(initialState, showDoneFilterTodos()).filter).toEqual(
      TodoFilter.DONE
    );
  });

  it("SHOW_TODO", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.TODO,
    };
    expect(todosReducer(initialState, showTodoFilterTodos()).filter).toEqual(
      TodoFilter.TODO
    );
  });

  it("no action", () => {
    const initialState = {
      todos: [],
      filter: TodoFilter.ALL,
    };
    expect(
      todosReducer(initialState, { action: "test" }) === initialState
    ).toBeTruthy();
  });

  it("no state", () => {
    const result = todosReducer(undefined, { action: "test" });
    expect(result).toEqual({
      todos: [],
      filter: TodoFilter.ALL,
    });
  });
});
