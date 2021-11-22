import { TodoFilter } from "store/model";
import {
  todosReducer,
  addTodo,
  toggleTodo,
  editTodo,
  removeTodo,
  setFilter,
  removeAllTodo,
  removeDoneTodo,
} from "./todo";

describe("Todos reducer", () => {
  it("Add", () => {
    const initialState = {
      items: [],
      filter: TodoFilter.All,
    };

    const action = addTodo("added todo");
    const result = todosReducer(initialState, action);
    expect(result !== initialState).toBeTruthy();
    expect(result.items.length).toEqual(1);
    expect(result.items[0]).toEqual(action.payload);
  });

  it("Toggle", () => {
    const initialState = {
      items: [
        { id: "123", title: "learn jest", isDone: false },
        { id: "321", title: "learn jest", isDone: false },
      ],
      filter: TodoFilter.All,
    };

    const action = toggleTodo("123");
    const result = todosReducer(initialState, action);
    expect(result.items[0].isDone).toBeTruthy();
    expect(result.items[1].isDone).toBeFalsy();
    const result2 = todosReducer(result, action);
    expect(result2.items[0].isDone).toBeFalsy();
  });

  it("Edit", () => {
    const initialState = {
      items: [
        { id: "123", title: "learn jest", isDone: false },
        { id: "321", title: "learn jest", isDone: false },
      ],
      filter: TodoFilter.All,
    };

    const result = todosReducer(initialState, editTodo("123", "updated title"));
    expect(result.items[0].title).toEqual("updated title");
  });

  it("Remove", () => {
    const initialState = {
      items: [
        { id: "123", title: "learn jest", isDone: false },
        { id: "321", title: "learn jest", isDone: false },
      ],
      filter: TodoFilter.All,
    };
    const result = todosReducer(initialState, removeTodo("123"));
    expect(result.items.length).toEqual(1);
    expect(result.items.find(({ id }) => id === "123")).not.toBeDefined();
  });

  it("SetFilter", () => {
    const initialState = {
      items: [],
      filter: TodoFilter.All,
    };
    expect(
      todosReducer(initialState, setFilter(TodoFilter.Todo)).filter
    ).toEqual(TodoFilter.Todo);
    expect(
      todosReducer(initialState, setFilter(TodoFilter.Done)).filter
    ).toEqual(TodoFilter.Done);
  });

  it("no action", () => {
    const initialState = {
      items: [],
      filter: TodoFilter.All,
    };
    expect(
      todosReducer(initialState, { action: "test" }) === initialState
    ).toBeTruthy();
  });

  it("no state", () => {
    const result = todosReducer(undefined, { action: "test" });
    expect(result).toEqual({
      items: [],
      filter: TodoFilter.All,
    });
  });

  it("Remove All", () => {
    const initialState = {
      items: [
        { id: "123", title: "learn jest", isDone: false },
        { id: "321", title: "learn jest", isDone: false },
      ],
      filter: TodoFilter.All,
    };
    const result = todosReducer(initialState, removeAllTodo());
    expect(result.items.length).toEqual(0);
  });

  it("Remove Done", () => {
    const initialState = {
      items: [
        { id: "123", title: "learn jest", isDone: false },
        { id: "321", title: "learn jest", isDone: true },
        { id: "456", title: "learn jest", isDone: true },
      ],
      filter: TodoFilter.All,
    };
    const result = todosReducer(initialState, removeDoneTodo());
    expect(result.items.length).toEqual(1);
    expect(result.items.find(({ id }) => id === "123")).toBeDefined();
  });
});
