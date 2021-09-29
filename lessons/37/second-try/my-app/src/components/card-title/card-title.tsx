import React from "react";

interface CardTitleProps {
  text: String;
  icon: boolean;
}

export const CardTitle: React.FC<CardTitleProps> = (props) => {
  if (props.icon === true) {
    return (
      <h1>
        <i className="material-icons ">face </i>
        <strong>{props.text}</strong>
      </h1>
    );
  }
  return (
    <h1 className="weak" style={{ color: "white" }}>
      {props.text}
    </h1>
  );
};
