import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "components/Filter";
import Todo from "components/Todo";
import Input from "components/Input";
import { deleteAllTodos, deleteDoneTodos } from "store/reducers/todo";
import { RootState } from "store/store";
import { TodoItem, TodoFilter } from "store/types";
import styles from "./Todos.module.css";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const filter = useSelector((state: RootState) => state.todos.filter);

  const onDeleteDoneTodos = useCallback(() => {
    dispatch(deleteDoneTodos());
  }, [dispatch]);

  const onDeleteAllTodos = useCallback(() => {
    dispatch(deleteAllTodos());
  }, [dispatch]);

  const filterTodos = useMemo(
    () =>
      (todos: TodoItem[], filter: TodoFilter): TodoItem[] => {
        if (filter === TodoFilter.ALL) {
          return todos;
        }
        if (filter === TodoFilter.DONE) {
          return todos.filter((todo) => todo.isDone);
        }
        if (filter === TodoFilter.TODO) {
          return todos.filter((todo) => !todo.isDone);
        }
        return todos;
      },
    []
  );

  return (
    <>
      <h1 className={styles.title}>Todo</h1>
      <Input />
      <div className={styles.form}>
        <Filter />
        <div>
          {filterTodos(todos, filter).map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </div>
        <div className={styles.flexbox}>
          <button className={styles.button} onClick={onDeleteDoneTodos}>
            Delete done todos
          </button>
          <button className={styles.button} onClick={onDeleteAllTodos}>
            Delete all todos
          </button>
        </div>
      </div>
    </>
  );
};

export default Todos;
