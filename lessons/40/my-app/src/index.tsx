import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
import { LoadedProvider, ThemeProvider } from "./myContext";

ReactDOM.render(
  <React.StrictMode>
    <LoadedProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LoadedProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
