import React from "react";
import "./Button.css";

type ButtonProps = {
  buttonname: string;
  textmessage: string;
};

const Button = ({ buttonname, textmessage }: ButtonProps) => {
  const handleClick = () => {
    console.log("You choose: ", textmessage);
  };

  return (
    <button className="button" onClick={handleClick}>
      <div className="button-name">{buttonname}</div>
    </button>
  );
};

export default Button;
