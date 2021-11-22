import React, { useState, useCallback, ChangeEvent } from "react";
import styles from "./TodoInput.module.css";
import Button from "components/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "store/reducers/todo";

const TodoInput = () => {
  const [newTodo, setnewTodo] = useState("");
  const onChangeName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setnewTodo(event.target.value);
    },
    [setnewTodo]
  );

  const dispatch = useDispatch();

  const onAddTodo = useCallback(() => {
    dispatch(addTodo(newTodo));
    setnewTodo("");
  }, [newTodo, dispatch]);

  return (
    <>
      <div className={styles.input} data-testid="todo-input">
        <h1 className={styles.title}>TodoInput</h1>
        <div className={styles.inputContainer}>
          <div className={styles.icon}>
            <i className="fas fa-scroll"></i>
          </div>
          <input
            data-testid="input-changed-title"
            type="text"
            placeholder="New Todo..."
            className={styles.input}
            value={newTodo}
            onChange={onChangeName}
          />
        </div>
        <Button
          text="Add new task"
          onClick={onAddTodo}
          size="large"
          testid="add-new-todo"
        />
      </div>
    </>
  );
};

export default TodoInput;
