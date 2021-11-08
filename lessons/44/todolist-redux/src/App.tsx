import { Container, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import "./App.css";
import AddTodos from "./components/AddTodos";
import BottomButtons from "./components/BottomButtons";
import ToDoList from "./components/ToDoList";

const App = () => {
  //mui alignment
  const [alignment, setAlignment] = React.useState("web");
  const [filterList, setFilterList] = React.useState(0);

  //mui function
  const handleChange = (event: any, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <Container maxWidth="xs">
      <AddTodos />

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

      <BottomButtons />
    </Container>
  );
};

export default App;
