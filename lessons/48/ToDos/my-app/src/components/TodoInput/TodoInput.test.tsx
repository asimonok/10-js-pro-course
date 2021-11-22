import { render, screen, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Todo from "../Todos/Todo";
import { addTodo } from "store/reducers/todo";
import TodoInput from ".";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useEffect: jest.fn((fn) => fn()),
  useSelector: jest.fn((fn) => fn()),
}));

jest.mock("store/reducers/todo", () => ({
  addTodo: jest.fn(),
}));

describe("Input", () => {
  const mockedStore = createStore((state) => state);
  const onChangeName = jest.fn();
  const component = (
    <Provider store={mockedStore}>
      <TodoInput />
    </Provider>
  );

  it("Title", () => {
    render(component);
    fireEvent.change(screen.getByTestId("input-changed-title"), {
      target: { value: "new title" },
    });
    expect(screen.getByTestId("input-changed-title").value).toEqual(
      "new title"
    );
  });

  it("Add new todo", () => {
    render(component);
    fireEvent.change(screen.getByTestId("input-changed-title"), {
      target: { value: "new title" },
    });
    fireEvent.click(screen.getByTestId("add-new-todo"));
    expect(addTodo).toBeCalledWith("new title");
  });

  /*describe("Todo", () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <Todo id="123" title="Learn testing" />
    </Provider>
  );
  
  it("Print title", () => {
    render(component);
    expect(screen.getByTestId("todo-title")).toHaveTextContent("Learn testing");
  });

  it("Switch if edit title", () => {
    render(component);
    expect(screen.getByTestId("todo-start-edit")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("todo-start-edit"));
    expect(screen.getByTestId("todo-finish-edit")).toBeDefined();
    fireEvent.click(screen.getByTestId("todo-finish-edit"));
    expect(screen.getByTestId("todo-start-edit")).toBeInTheDocument();
  });*/
});
