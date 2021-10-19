import React from "react";
import styles from "./App.module.css";
import PostCardContainer from "./components/PostCardContainer";
import { ThemeProvider } from "../src/components/ThemeContext";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider>
      <div className={styles.App}>
        <Button />
        <PostCardContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
