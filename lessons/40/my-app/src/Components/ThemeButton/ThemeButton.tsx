import React, { useContext } from "react";
import { ThemeContext } from "../../myContext";
import styles from "./ThemeButton.module.css";

const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="toggle-button"
          className={styles.toggle__button}
          onClick={() => setTheme(theme ? false : true)}
        />
      </div>
    </>
  );
};

export default ThemeButton;
