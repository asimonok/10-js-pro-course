import { Todo, TodoAction } from "../../types/todo";
import reducer, {
  addTodo,
  deleteDoneTasks,
  editTodo,
  initialState,
  removeAllTodos,
  removeTodo,
  setTodoStatus,
  toggleEdit,
} from "./reducerTodos";

describe("Reducer todos", () => {
  it("should return the initial state on first run", () => {
    const nextState = initialState;

    const result = reducer(undefined, { type: TodoAction });

    expect(result).toEqual(nextState);
  });

  it("add todo", () => {
    const initialState = [] as Todo[];
    const res = reducer(initialState, addTodo("test"));
    expect(res !== initialState).toBeTruthy();
    expect(res.length).toEqual(1);
    const addedTodo = res[0];
    expect(addedTodo.description).toEqual("test");
  });

  it("if todo empty", () => {
    const initialState = [] as Todo[];
    const res = reducer(initialState, addTodo(""));
    expect(res !== initialState).toBeFalsy();
    expect(res.length).toEqual(0);
  });

  it("remove todo", () => {
    const initialState = [
      {
        id: "1",
        description: "test",
        completed: false,
        edit: false,
      },
      {
        id: "2",
        description: "test2",
        completed: false,
        edit: false,
      },
    ];
    const res = reducer(initialState, removeTodo("1"));
    expect(res.length).toEqual(1);
    expect(res.find(({ id }) => id === "1")).not.toBeDefined();
  });

  it("edit todo", () => {
    const initialState = [
      {
        id: "1",
        description: "test",
        completed: false,
        edit: false,
      },
      {
        id: "2",
        description: "test2",
        completed: false,
        edit: false,
      },
    ];
    const res = reducer(initialState, editTodo({ description: "new test", id: "1" }));
    expect(res[0].description).toEqual("new test");
    const res2 = reducer(initialState, editTodo({ description: null, id: "1" }));
    expect(res2[0].description).toEqual("test");
  });

  it("toggle edit", () => {
    const initialState = [
      {
        id: "1",
        description: "test",
        completed: false,
        edit: false,
      },
    ];
    const res = reducer(initialState, toggleEdit({ edit: true, id: "1" }));
    expect(res[0].edit).toBeTruthy();
    const res2 = reducer(res, toggleEdit({ edit: false, id: "1" }));
    expect(res2[0].edit).toBeFalsy();
  });

  it("toggle complete", () => {
    const initialState = [
      {
        id: "1",
        description: "test",
        completed: false,
        edit: false,
      },
      {
        id: "2",
        description: "test2",
        completed: false,
        edit: false,
      },
    ];
    const res = reducer(initialState, setTodoStatus({ completed: true, id: "1" }));
    expect(res[0].completed).toBeTruthy();
    expect(res[1].completed).toBeFalsy();
    const res2 = reducer(res, setTodoStatus({ completed: false, id: "1" }));
    expect(res2[0].completed).toBeFalsy();
  });

  it("remove all todos", () => {
    const initialState = [
      {
        id: "1",
        description: "test",
        completed: false,
        edit: false,
      },
      {
        id: "2",
        description: "test2",
        completed: false,
        edit: false,
      },
    ];
    const res = reducer(initialState, removeAllTodos());
    expect(res).toEqual([]);
  });

  it("delete done tasks", () => {
    const initialState = [
      {
        id: "1",
        description: "test",
        completed: true,
        edit: false,
      },
      {
        id: "2",
        description: "test2",
        completed: false,
        edit: false,
      },
    ];
    const res = reducer(initialState, deleteDoneTasks());
    expect(res.find(({ id }) => id === "1")).not.toBeDefined();
  });
});
