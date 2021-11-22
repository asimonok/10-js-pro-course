import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames/bind";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

type ButtonProps = {
  text: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
};

const cx = classNames.bind(styles);

const Button: React.FC<ButtonProps> = (props) => {
  const { text, onClick, size } = props;
  const newTheme = useSelector((state: RootState) => state.theme.theme);

  return (
    <button
      className={cx("button", size, { dark: newTheme === "dark" })}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
