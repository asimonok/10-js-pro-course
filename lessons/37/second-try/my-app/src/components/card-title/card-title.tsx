import React from "react";

interface CardTitleProps {
  text: String;
}

export const CardTitle: React.FC<CardTitleProps> = (props) => {
  return <h1>{props.text}</h1>;
};
