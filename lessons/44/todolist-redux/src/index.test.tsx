import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import ReactDOM from "react-dom";

describe("index", () => {
  const component = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  it("render index", () => {
    const spy = jest.spyOn(ReactDOM, "render");
    render(component);
  });
});
