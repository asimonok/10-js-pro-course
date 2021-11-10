import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";
import Todos from "./components/Todos";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Todos />
      </div>
    </Router>
  );
}

export default App;
