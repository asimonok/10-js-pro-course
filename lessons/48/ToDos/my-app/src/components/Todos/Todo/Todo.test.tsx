import { render, screen, fireEvent } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Todo from "./Todo";
import { editTodo, toggleTodo, removeTodo } from "store/reducers/todo";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useEffect: jest.fn((fn) => fn()),
  useSelector: jest.fn((fn) => fn()),
}));

jest.mock("store/reducers/todo", () => ({
  editTodo: jest.fn(),
  toggleTodo: jest.fn(),
  removeTodo: jest.fn(),
}));

describe("Todo", () => {
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
  });

  it("Update title", () => {
    render(component);
    fireEvent.click(screen.getByTestId("todo-start-edit"));
    fireEvent.change(screen.getByTestId("todo-changed-title"), {
      target: { value: "new title" },
    });
    expect(screen.getByTestId("todo-changed-title").value).toEqual("new title");
    fireEvent.click(screen.getByTestId("todo-finish-edit"));
    expect(editTodo).toBeCalledWith("123", "new title");
  });

  it("Toggle isDone", () => {
    render(component);
    fireEvent.click(screen.getByTestId("todo-done"), { target: {} });
    expect(toggleTodo).toBeCalledWith("123");
  });

  it("Remove", () => {
    render(component);
    fireEvent.click(screen.getByTestId("todo-remove"), { target: {} });
    expect(removeTodo).toBeCalledWith("123");
  });
});
