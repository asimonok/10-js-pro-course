import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import TodoInput from "components/TodoInput";
import Todos from "components/Todos/Todos";
import { useSelector } from "react-redux";
//import { store } from "./store/store";

//подписаться на изменени в store:
//rootReducer.subscribe(() => {
// rootReducer.getState();
//});

function App() {
  //const todoList: [] = useSelector(selectTodoList);
  return (
    <Router>
      <div className={styles.App}>
        <TodoInput />
        <div className={styles.container}>
          <Todos />
        </div>
      </div>
    </Router>
  );
}

export default App;
