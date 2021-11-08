import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { deleteDoneTasks, removeAllTodos } from "../../store/reducer/reducerTodos";

const BottomButtons = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
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
  );
};

export default BottomButtons;
