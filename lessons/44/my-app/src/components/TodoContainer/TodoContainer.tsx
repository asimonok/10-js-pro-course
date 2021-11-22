import React, { useCallback } from 'react';
import styles from './TodoContainer.module.css';
import TodoItem from 'components/TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store/store';
import Button from 'components/Button';
import TodoInput from 'components/TodoInput';
import { FilterType } from 'redux/models/filterType';
import {
  deleteAllTodos,
  deleteDoneTodos,
  setFilter,
} from 'redux/actions/todoActions';

const TodoContainer = () => {
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
    <div data-testid="todo-container">
      <TodoInput />
      <h2 className={styles.title}>TodoList</h2>
      {filteredTodoList.length === 0 ? (
        <p>There are no tasks yet.</p>
      ) : (
        <>
          <div className={styles.filterButtons}>
            {Object.values(FilterType).map((filter, index) => (
              <Button
                text={filter}
                key={index}
                onClick={() => onSetFilter(filter)}
                filterButton
              />
            ))}
          </div>
          <p>{activeFilter} tasks:</p>

          <div className={styles.container}>
            {filteredTodoList.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  isDone={item.isDone}
                  id={item.id}
                />
              );
            })}
          </div>
          <div className={styles.deleteButtons}>
            <Button
              text="Delete done tasks"
              onClick={deleteDoneOnClick}
              deleteButton
            />
            <Button
              text="Delete all tasks"
              onClick={deleteAllOnClick}
              deleteButton
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoContainer;
