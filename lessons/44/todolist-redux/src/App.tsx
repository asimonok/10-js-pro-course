import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import BottomButtons from "./components/BottomButtons";
import ToDoList from "./components/ToDoList";

const App = () => {
  //mui alignment
  const [alignment, setAlignment] = React.useState("all");
  const [filterList, setFilterList] = React.useState("All");

  //mui function
  const handleChange = (event: React.SyntheticEvent, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <Container maxWidth="xs">
        <AddTodos />

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          fullWidth
          exclusive
          onChange={handleChange}
        >
          <ToggleButton data-testid="buttonAll" value="all" onClick={() => setFilterList("All")}>
            All
          </ToggleButton>
          <ToggleButton data-testid="buttonDone" value="done" onClick={() => setFilterList("Done")}>
            Done
          </ToggleButton>
          <ToggleButton data-testid="buttonTodo" value="todo" onClick={() => setFilterList("Todo")}>
            Todo
          </ToggleButton>
        </ToggleButtonGroup>

        <ToDoList filterList={filterList} />

        <BottomButtons />
      </Container>
    </>
  );
};

export default App;
