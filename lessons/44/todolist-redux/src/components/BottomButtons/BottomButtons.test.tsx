import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "@testing-library/jest-dom/extend-expect";
import BottomButtons from ".";

describe("BottomButtons", () => {
  const mockedStore = createStore((state) => state);
  const component = (
    <Provider store={mockedStore}>
      <BottomButtons />
    </Provider>
  );
  it("renders BottomButtons component", () => {
    render(component);
    expect(screen.getByTestId("buttonDeleteAllTasks")).toHaveTextContent("Delete All tasks");
  });
  it("delete all tasks", () => {
    render(component);
    const buttonDeleteAllTasks = screen.getByTestId("buttonDeleteAllTasks");
    expect(buttonDeleteAllTasks).toBeDefined();

    fireEvent.click(buttonDeleteAllTasks);
  });
  it("delete done tasks", () => {
    render(component);
    const buttonDeleteDoneTasks = screen.getByTestId("buttonDeleteDoneTasks");
    expect(buttonDeleteDoneTasks).toBeDefined();

    fireEvent.click(buttonDeleteDoneTasks);
  });
});
