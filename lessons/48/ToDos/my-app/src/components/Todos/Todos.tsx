import React, { useCallback } from "react";
import styles from "./Todos.module.css";
import Button from "components/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import Todo from "./Todo";
import { setFilter, removeAllTodo, removeDoneTodo } from "store/reducers/todo";
import { TodoFilter } from "store/model";

const Todos = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.todos.items);
  const activeFilter = useSelector((state: RootState) => state.todos.filter);
  const onSetFilter = (filter: TodoFilter) => dispatch(setFilter(filter));
  const filteredItems = items.filter((item) => {
    if (activeFilter === TodoFilter.Done) {
      return item.isDone;
    }
    if (activeFilter === TodoFilter.Todo) {
      return !item.isDone;
    }
    return true;
  });

  const onRemoveDoneTodo = useCallback(() => {
    dispatch(removeDoneTodo());
  }, [dispatch]);

  const onRemoveAllTodo = useCallback(() => {
    dispatch(removeAllTodo());
  }, [dispatch]);

  return (
    <>
      <div data-testid="todos">
        <h2 className={styles.title}>TodoList</h2>
        <div className={styles.btn}>
          {Object.values(TodoFilter).map((filter, index) => (
            <button
              className={styles.button}
              key={index}
              disabled={filter === activeFilter}
              onClick={() => onSetFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.toDos}>
          {filteredItems.map((todo) => (
            <Todo id={todo.id} title={todo.title} isDone={todo.isDone} />
          ))}
        </div>

        <div className={styles.btndel}>
          <Button
            text="Delete Done Tasks"
            onClick={onRemoveDoneTodo}
            size="medium"
            data-testid="todos-remove-done"
          />
          <Button
            text="Delete All Tasks"
            onClick={onRemoveAllTodo}
            size="medium"
            data-testid="todos-remove-all"
          />
        </div>
      </div>
    </>
  );
};

export default Todos;
