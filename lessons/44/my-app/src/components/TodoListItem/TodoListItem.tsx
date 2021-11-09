import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { Todo } from '../../constants/Todo';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'redux/actions/actions';
import { completeTodo, editTodo } from 'redux/actions/actions';

interface IProps {
  item: Todo;
}

const TodoListItem: FC<IProps> = (props) => {
  const { item } = props;
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(item.title);
  const dispatch = useDispatch();

  const completeOnChange = useCallback(() => {
    dispatch(completeTodo(item.id));
  }, [dispatch, item.id]);

  const editOnClick = useCallback(() => {
    setIsEdit(true);
  }, [setIsEdit]);

  const saveOnClick = useCallback(() => {
    setIsEdit(false);
    dispatch(editTodo(item.id, updatedTitle));
  }, [setIsEdit, dispatch, updatedTitle, item.id]);

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setUpdatedTitle(e.target.value);
    },
    [setUpdatedTitle]
  );

  return (
    <div>
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={completeOnChange}
      />
      {!isEdit && (
        <>
          {item.title}
          <Button text="Edit" onClick={editOnClick} />
        </>
      )}
      {isEdit && (
        <>
          <input type="text" value={updatedTitle} onChange={onChangeTitle} />
          <Button text="Save" onClick={saveOnClick} />
        </>
      )}
      <span
        onClick={() => {
          dispatch(deleteTodo(item.id));
        }}
      >
        ×
      </span>
    </div>
  );
};

export default TodoListItem;
