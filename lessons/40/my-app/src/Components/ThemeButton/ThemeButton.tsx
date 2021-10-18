import React, { useContext } from "react";
import { ThemeContext } from "../../myContext";
import "./ThemeButton.css";

const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <>
      <div>
        <input
          type="checkbox"
          id="toggle-button"
          className="toggle-button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
};

export default ThemeButton;
