import React, { useCallback } from 'react';
import TodoListItem from 'components/TodoListItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/store';
import Button from 'components/Button';
import { FilterType } from 'redux/actions/filterType';
import {
  deleteAllTodos,
  deleteDoneTodos,
  setFilter,
} from 'redux/actions/actions';

const TodoList = () => {
  const todoList = useSelector((state: RootState) => {
    return state.todos.items;
  });
  const activeFilter = useSelector((state: RootState) => state.todos.filter);
  const dispatch = useDispatch();

  const deleteDoneOnClick = useCallback(() => {
    dispatch(deleteDoneTodos());
  }, [dispatch]);

  const deleteAllOnClick = useCallback(() => {
    dispatch(deleteAllTodos());
  }, [dispatch]);

  const onSetFilter = (filter: FilterType) => dispatch(setFilter(filter));

  const filteredTodoList = todoList.filter((item) => {
    if (activeFilter === FilterType.DONE) {
      return item.isDone;
    }
    if (activeFilter === FilterType.TODO) {
      return !item.isDone;
    }
    return true;
  });

  return (
    <>
      {Object.values(FilterType).map((filter, index) => (
        <Button text={filter} key={index} onClick={() => onSetFilter(filter)} />
      ))}

      <div className="todo-list">
        {filteredTodoList.map((item) => {
          return <TodoListItem key={item.id} item={item} />;
        })}
      </div>
      <Button text="Delete done tasks" onClick={deleteDoneOnClick} />
      <Button text="Delete all tasks" onClick={deleteAllOnClick} />
    </>
  );
};

export default TodoList;
