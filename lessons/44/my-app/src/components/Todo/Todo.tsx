import { ChangeEvent, useCallback, useState } from "react";
import { TodoItem } from "store/types";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "store/reducers/todo";
import styles from "./Todo.module.css";

type Props = {
  todo: TodoItem;
};

const Todo: React.FC<Props> = ({ todo }) => {
  const [editInput, setEditInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const onChangeTodo = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(editTodo({ ...todo, isDone: event.target.checked }));
    },
    [dispatch, todo]
  );

  const onStartEdit = useCallback(() => {
    setEditInput(todo.title);
    setIsEdit(true);
  }, [todo.title]);

  const onChangeTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEditInput(event.target.value);
  }, []);

  const onSave = useCallback(() => {
    dispatch(editTodo({ ...todo, title: editInput }));
    setIsEdit(false);
  }, [dispatch, editInput, todo]);

  const onRemove = useCallback(() => {
    dispatch(deleteTodo(todo.id));
  }, [dispatch, todo.id]);

  return (
    <div className={styles.item}>
      <div>
        {!isEdit && <span data-testid="todo-title">{todo.title}</span>}
        {isEdit && (
          <>
            <input
              data-testid="todo-changed-title"
              className={styles.input}
              type="text"
              value={editInput}
              onChange={onChangeTitle}
            ></input>
            <button
              data-testid="todo-finish-edit"
              className={styles.button}
              onClick={onSave}
            >
              Save
            </button>
          </>
        )}
      </div>
      <div className={styles.action}>
        <input
          data-testid="todo-done"
          className={styles.checkbox}
          type="checkbox"
          checked={todo.isDone}
          onChange={onChangeTodo}
        ></input>
        <button
          data-testid="todo-start-edit"
          className={styles.button__action}
          onClick={onStartEdit}
        >
          Edit
        </button>
        <button
          data-testid="todo-remove"
          className={styles.button__action}
          onClick={onRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Todo;
