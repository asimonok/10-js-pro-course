import React, { useCallback } from 'react';
import TodoListItem from 'components/TodoListItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/store';
import Button from 'components/Button';
import { deleteAllTodos, deleteDoneTodos } from 'redux/actions/actions';

const TodoList = () => {
  const todoList = useSelector((state: RootState) => {
    return state.todos.items;
  });
  const dispatch = useDispatch();

  const deleteDoneOnClick = useCallback(() => {
    dispatch(deleteDoneTodos());
  }, [dispatch]);

  const deleteAllOnClick = useCallback(() => {
    dispatch(deleteAllTodos());
  }, [dispatch]);

  return (
    <>
      <Button text="All" />
      <Button text="Done" />
      <Button text="Todo" />
      <div className="todo-list">
        {todoList.map((item) => {
          return <TodoListItem key={item.id} item={item} />;
        })}
      </div>
      <Button text="Delete done tasks" onClick={deleteDoneOnClick} />
      <Button text="Delete all tasks" onClick={deleteAllOnClick} />
    </>
  );
};

export default TodoList;
