import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addTodo } from "../../store/reducer/reducerTodos";

const AddTodos = () => {
  const [todoDescription, setTodoDescription] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux ToDo List
      </Typography>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)} // bad bad bad
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
    </>
  );
};

export default AddTodos;
