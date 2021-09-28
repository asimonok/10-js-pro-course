import React from "react";

interface CardH2Props {
  text: String;
}

export const CardH2: React.FC<CardH2Props> = (props) => {
  return <h2>{props.text}</h2>;
};
