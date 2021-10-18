import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoadingProvider, ThemeProvider } from "./myContext";

ReactDOM.render(
  <React.StrictMode>
    <LoadingProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
