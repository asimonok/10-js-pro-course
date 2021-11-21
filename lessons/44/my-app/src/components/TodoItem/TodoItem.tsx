import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import styles from './TodoItem.module.css';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/actions/todoActions';
import { completeTodo, editTodo } from 'redux/actions/todoActions';
import editIcon from 'img/EditIcon.svg';
import deleteIcon from 'img/DeleteIcon.svg';

const TodoItem: FC<{ title: string; isDone: boolean; id: string }> = (
  props
) => {
  const { title, isDone, id } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const dispatch = useDispatch();

  const completeOnChange = useCallback(() => {
    dispatch(completeTodo(id));
  }, [dispatch, id]);

  const editOnClick = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);

  const saveOnClick = useCallback(() => {
    setIsEdit(false);
    dispatch(editTodo(id, updatedTitle));
  }, [setIsEdit, dispatch, updatedTitle, id]);

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUpdatedTitle(e.target.value);
    },
    [setUpdatedTitle]
  );

  return (
    <div className={styles.toDoItem}>
      {!isEdit && (
        <>
          <div className={isDone ? styles.done : ``} data-testid="todo-title">
            {title}
          </div>
          <div className={styles.toDoItemIcons}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={completeOnChange}
              className={styles.checkbox}
              data-testid="todo-done"
            />
            <div
              className={styles.iconButton}
              onClick={editOnClick}
              data-testid="todo-start-edit"
            >
              <img className={styles.editIconItem} src={editIcon} alt="edit" />
            </div>
            <div
              className={styles.iconButton}
              onClick={() => {
                dispatch(deleteTodo(id));
              }}
              data-testid="todo-delete"
            >
              <img
                className={styles.deleteIconItem}
                src={deleteIcon}
                alt="delete"
              />
            </div>
          </div>
        </>
      )}
      {isEdit && (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={onChangeTitle}
            className={styles.editTaskInput}
            data-testid="todo-changed-title"
          />
          <Button text="Save" onClick={saveOnClick} saveButton />
        </>
      )}
    </div>
  );
};

export default TodoItem;
