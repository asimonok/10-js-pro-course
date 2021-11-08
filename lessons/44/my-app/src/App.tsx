import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styles from "./App.module.css";
import Filter from "./components/Filter";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Router>
      <div className={styles.app}>
        <h1 className={styles.title}>ToDo List</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input />
          <Filter />
        </form>
        <ToDoList />
      </div>
    </Router>
  );
}

export default App;
