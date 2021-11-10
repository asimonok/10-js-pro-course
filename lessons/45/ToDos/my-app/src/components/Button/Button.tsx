import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";

interface ButtonProps {
  text: string;
  onClick: () => void;
  size: "small" | "medium" | "large";
  disabled?: boolean;
}

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick, size } = props;

  //const [theme, setTheme] = useContext(ThemeContext);
  return (
    <button className={cx("button", size)} onClick={onClick}>
      {/*{ dark: theme === "dark" }*/}
      {text}
    </button>
  );
};

export default Button;
