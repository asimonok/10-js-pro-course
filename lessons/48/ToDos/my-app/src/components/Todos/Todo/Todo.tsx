import React, { ChangeEvent, memo, useCallback, useState } from "react";
import styles from "./Todo.module.css";
import { TodoItem } from "common/todo";
//import Checkbox from "@material-ui/core/Checkbox";
//import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { toggleTodo, editTodo, removeTodo } from "store/reducers/todo";

const Todo = ({ id, title, isDone }: TodoItem) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const onToggle = useCallback(() => {
    dispatch(toggleTodo(id));
  }, [dispatch, id, toggleTodo]);

  const onStartEdit = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);

  const onSave = useCallback(() => {
    dispatch(editTodo(id, updatedTitle));
    setIsEdit(false);
  }, [setIsEdit, dispatch, updatedTitle, id]);

  const onChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setUpdatedTitle(event.target.value);
    },
    [setIsEdit]
  );

  const onRemove = useCallback(() => {
    dispatch(removeTodo(id));
  }, [dispatch, id]);

  return (
    <div className={styles.todoItem}>
      <input
        data-testid="todo-done"
        type="checkbox"
        checked={isDone}
        onChange={onToggle}
      />
      <p
        data-testid="todo-title"
        className={styles.done && styles.todoItemDone}
      >
        {title}
      </p>

      {!isEdit && (
        <>
          <button
            data-testid="todo-start-edit"
            className={styles.penicon}
            onClick={onStartEdit}
          >
            <i className="fas fa-pen"></i>
          </button>
        </>
      )}
      {isEdit && (
        <>
          <input
            data-testid="todo-changed-title"
            type="text"
            value={updatedTitle}
            onChange={onChangeTitle}
            className={styles.input}
          />
          <button data-testid="todo-finish-edit" onClick={onSave}>
            Save
          </button>
        </>
      )}

      <IconButton
        aria-label="delete"
        size="large"
        color="secondary"
        data-testid="todo-remove"
        onClick={onRemove}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default memo(Todo);
