import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, storeCasual } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeCasual}>
      <Provider store={store}>
        <App />
      </Provider>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
