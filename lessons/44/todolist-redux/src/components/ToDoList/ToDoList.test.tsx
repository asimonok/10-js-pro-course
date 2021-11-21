import { render, screen, fireEvent } from "@testing-library/react";
import ToDoList from ".";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import userEvent from "@testing-library/user-event";

// import { addTodo } from "../../store/reducer/reducerTodos";

// const mockDispatch = jest.fn();

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: () => mockDispatch,
//   useEffect: jest.fn((fn) => fn()),
//   useSelector: jest.fn((fn) => fn()),
// }));

// jest.mock("../../store/reducer/reducerTodos", () => ({
//   addTodo: jest.fn(),
// }));

describe("TodoList", () => {
  const component = (
    <Provider store={store}>
      <ToDoList filterList={"All"} />
    </Provider>
  );

  it("filter Done", () => {
    render(
      <Provider store={store}>
        <ToDoList filterList={"Done"} />
      </Provider>
    );
  });

  it("filter Todo", () => {
    render(
      <Provider store={store}>
        <ToDoList filterList={"Todo"} />
      </Provider>
    );
  });

  it("renders TodoList component", () => {
    render(component);
    expect(screen.getByTestId("CheckBoxOutlineBlankIcon")).toBeInTheDocument();
  });

  it("complishen todo", () => {
    render(component);
    // screen.debug();
    let containerStyle = screen.getByTestId("todoTextDiv");
    let styles = getComputedStyle(containerStyle);
    expect(styles.textDecoration).toBe("none");

    const checkbox = screen.getByTestId("checkboxTodo");
    expect(checkbox).not.toBeChecked();
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    containerStyle = screen.getByTestId("todoTextDiv");
    styles = getComputedStyle(containerStyle);
    expect(styles.textDecoration).toBe("line-through");

    // const wrapper = mount(component);
    // const checkBox = wrapper.find(Checkbox);
    // checkBox.simulate("change", { target: { checked: true } });

    // wrapper.update();

    // expect(wrapper.find(Checkbox).props().checked).toBe(true);
    // checkBox.simulate("change", { target: { checked: true } });

    // wrapper.update();

    // expect(wrapper.find(Checkbox).props().checked).toBe(true);
    // const containerStyle = comp.find("todoTextDiv");
    // const styles = getComputedStyle(containerStyle);
    // expect(styles.textDecoration).toBe("none");

    // const checkbox = comp.find({ type: "checkbox" });
    // const checkbox = screen
    //   .getByTestId("CheckBoxOutlineBlankIcon")
    //   .querySelector('input[type="checkbox"]');

    // expect(checkbox).not.toBeChecked();
    // userEvent.click(checkbox);
    // expect(checkbox).toBeChecked();

    // expect(styles.textDecoration).toBe("line-through");
  });

  it("edit todo", () => {
    render(component);
    const editButton = screen.getByTestId("editTodo");
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    const editTodoInput = screen.getByTestId("editTodoInput") as HTMLInputElement;
    expect(editTodoInput).toBeInTheDocument();
    fireEvent.change(editTodoInput, { target: { value: "test" } });
    expect(editTodoInput).toHaveValue("test");
    fireEvent.click(editButton);
    const todoText = screen.getByTestId("todoText");
    expect(todoText).toHaveTextContent("test");
  });
});
