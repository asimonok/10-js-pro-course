import { render, screen, fireEvent } from "@testing-library/react";
import AddTodos from "./AddTodos";
import "@testing-library/jest-dom/extend-expect";
import { addTodo } from "../../store/reducer/reducerTodos";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useEffect: jest.fn((fn) => fn()),
  useSelector: jest.fn((fn) => fn()),
}));

jest.mock("../../store/reducer/reducerTodos", () => ({
  addTodo: jest.fn(),
}));

describe("AddTodos", () => {
  const component = <AddTodos />;

  it("renders AddTodo component", () => {
    render(component);
    expect(screen.getByTestId("title")).toHaveTextContent("Redux ToDo List");
  });

  it("input name", () => {
    render(component);
    const inputAddTodo = screen.getByTestId("inputTodo");
    expect(inputAddTodo).toBeDefined();
    const query = "test";
    const mockChange = jest.fn();

    inputAddTodo.onchange = mockChange;
    fireEvent.change(inputAddTodo, { target: { value: query } });
    expect(mockChange).toHaveBeenCalled();
    expect(inputAddTodo).toHaveValue(query);

    const buttonAddTodo = screen.getByTestId("buttonAddTodo");
    expect(buttonAddTodo).toBeDefined();

    fireEvent.click(buttonAddTodo);
    expect(addTodo).toBeCalledWith(query);
  });
});
