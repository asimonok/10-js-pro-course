import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import "./Button.css";

const Button = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  if (theme === "light") {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "grey";
  }

  return (
    <button
      className="theme-button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      theme {theme}
    </button>
  );
};

export default Button;
