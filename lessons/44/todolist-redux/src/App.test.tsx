import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";

it("App", () => {
  expect(true).toEqual(true);
});
export {};

describe("App", () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("renders App component", () => {
    render(component);
  });

  it("click on All button", () => {
    render(component);
    screen.debug();
    const buttonAll = screen.getByTestId("buttonAll");
    expect(buttonAll).toBeDefined();

    fireEvent.click(buttonAll);
  });

  it("click on Done button", () => {
    render(component);
    screen.debug();
    const buttonDone = screen.getByTestId("buttonDone");
    expect(buttonDone).toBeDefined();

    fireEvent.click(buttonDone);
  });

  it("click on Todo button", () => {
    render(component);
    screen.debug();
    const buttonTodo = screen.getByTestId("buttonTodo");
    expect(buttonTodo).toBeDefined();

    fireEvent.click(buttonTodo);
  });
});
