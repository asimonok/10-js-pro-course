import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

//it("renders learn react link", () => {
//render(<App />);
// eslint-disable-next-line no-restricted-globals
//const linkElement = screen.getByText(/learn react/i);
//expect(linkElement).toBeInTheDocument();
//expect(true).toEqual(true);
//});

jest.mock("components/ToDoInput", () => {
  return () => <div data-testid="todo-input"></div>;
});

jest.mock("components/ToDos", () => {
  return () => <div data-testid="todos"></div>;
});

describe("App", () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <App />
    </Provider>
  );

  it("should render component", () => {
    render(component);
    expect(screen.getByTestId("App")).toBeInTheDocument();
  });
});
