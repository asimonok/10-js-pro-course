import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducer/reducerTodos";
import { AppDispatch } from "../../store/store";

const AddTodos = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Typography style={{ textAlign: "center" }} variant="h3">
        <span data-testid="title">Redux ToDo List</span>
      </Typography>
      <TextField
        variant="outlined"
        label="Write todo"
        fullWidth
        inputProps={{ "data-testid": "inputTodo" }}
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        data-testid="buttonAddTodo"
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Item
      </Button>
    </>
  );
};

export default AddTodos;
