import React from "react";
import "./App.css";
import PostCardContainer from "./components/PostCardContainer";
import { ThemeProvider } from "../src/components/ThemeContext";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Button />
        <PostCardContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
