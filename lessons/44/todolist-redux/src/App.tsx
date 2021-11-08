import {
  Button,
  ButtonGroup,
  Container,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ToDoList from "./components/ToDoList";
import { AppDispatch } from "./store";
import { addTodo, deleteDoneTasks, removeAllTodos } from "./store/reducer/reducerTodos";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [todoDescription, setTodoDescription] = useState("");

  const [alignment, setAlignment] = React.useState("web");
  const [filterList, setFilterList] = React.useState(0);

  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux ToDo List
      </Typography>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Item
      </Button>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        fullWidth
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="all" onClick={() => setFilterList(0)}>
          All
        </ToggleButton>
        <ToggleButton value="done" onClick={() => setFilterList(1)}>
          Done
        </ToggleButton>
        <ToggleButton value="todo" onClick={() => setFilterList(2)}>
          Todo
        </ToggleButton>
      </ToggleButtonGroup>
      <ToDoList filterList={filterList} />

      <ButtonGroup fullWidth disableElevation variant="contained">
        <Button
          onClick={() => {
            dispatch(removeAllTodos());
          }}
        >
          Delete All tasks
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteDoneTasks());
          }}
        >
          Delete done tasks
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default App;
