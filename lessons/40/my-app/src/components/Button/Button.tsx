import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Button = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  if (theme === "light") {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "grey";
  }

  return (
    <button
      className={cx({
        button: true,
        light: theme === "light",
        dark: theme === "dark",
      })}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      theme {theme}
    </button>
  );
};

export default Button;
