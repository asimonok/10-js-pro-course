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
        {props.text}
      </h1>
    );
  }
  return <h1>{props.text}</h1>;
};
