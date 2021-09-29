import React from "react";

interface ButtonProps {
  click: Boolean;
}

export const Button: React.FC = () => {
  const clickHandler = () => {
    console.log();
  };
  return (
    <button className="button green darken-2" onClick={clickHandler}>
      Choose
    </button>
  );
};
