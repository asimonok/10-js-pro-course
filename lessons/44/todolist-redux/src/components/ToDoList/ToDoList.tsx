import {
  Checkbox,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, removeTodo, setTodoStatus, toggleEdit } from "../../store/reducer/reducerTodos";
import { AppDispatch, RootState } from "../../store/store";

interface Props {
  filterList: number;
}

const ToDoList: React.FC<Props> = (props) => {
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  //bad filter
  const filterDoneTasks = todoList.filter((todo) => {
    return todo.completed === true;
  });
  //bad filter
  const filterTodoTasks = todoList.filter((todo) => {
    return todo.completed === false;
  });

  if (props.filterList === 0) {
    //ALL TASKS
    return (
      <List>
        {todoList.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.edit ? null : todo.description}
              {todo.edit && (
                <Input
                  type="text"
                  value={todo.description}
                  onChange={(e) => dispatch(editTodo({ id: todo.id, description: e.target.value }))}
                />
              )}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  dispatch(
                    toggleEdit({
                      id: todo.id,
                      edit: !todo.edit,
                    })
                  );
                }}
              >
                <CreateIcon />
              </IconButton>
              <Checkbox
                edge="end"
                checked={todo.completed}
                value={todo.completed}
                onChange={() => {
                  dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  } else if (props.filterList === 1) {
    // DONE TASKS
    return (
      <List>
        {filterDoneTasks.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                checked={todo.completed}
                value={todo.completed}
                onChange={() => {
                  dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  } else if (props.filterList === 2) {
    // TODO TASKS
    return (
      <List>
        {filterTodoTasks.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.description}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                checked={todo.completed}
                value={todo.completed}
                onChange={() => {
                  dispatch(setTodoStatus({ completed: !todo.completed, id: todo.id }));
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    );
  }
  return <></>;
};

export default ToDoList;
