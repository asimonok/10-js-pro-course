import { ChangeEvent, useCallback, useState } from "react";
import styles from "./Input.module.css";
import { useDispatch } from "react-redux";
import { addTodo } from "store/reducers/todo";

const Input = () => {
  const [input, setInput] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  const addNewTodo = useCallback(() => {
    dispatch(addTodo(input));
    setInput("");
    setIsDisabled(true);
  }, [dispatch, input]);

  const onToggle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    setIsDisabled(event.target.value.length < 1);
  }, []);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={onToggle}
      ></input>
      <button
        className={styles.button}
        disabled={isDisabled}
        onClick={addNewTodo}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
