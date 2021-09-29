import "./Button.css";
import React from "react";

interface ButtonProps {
  click: Boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const clickHandler1 = (): void => {
    console.log("$380/month");
  };
  const clickHandler2 = (): void => {
    console.log("$20/day");
  };
  if (props.click === true) {
    return (
      <button className="button green darken-2" onClick={clickHandler2}>
        Choose
      </button>
    );
  }
  return (
    <button className="button green darken-2" onClick={clickHandler1}>
      Choose
    </button>
  );
};
