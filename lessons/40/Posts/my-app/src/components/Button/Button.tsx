import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.css";

const cx = classNames.bind(styles);

type ButtonProps = {
  text: string;
  action: () => void;
  color: "dark" | "light";
};

const Button = ({ text, action, color }: ButtonProps) => {
  return (
    <button
      className={cx(
        {
          button: true,
        },
        color
      )}
      onClick={action}
    >
      <div className={styles.name}>{text}</div>
    </button>
  );
};

export default Button;
