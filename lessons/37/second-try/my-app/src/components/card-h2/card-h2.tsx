import React from "react";

interface CardH2Props {
  text: String;
  color: boolean;
}

export const CardH2: React.FC<CardH2Props> = (props) => {
  if (props.color === true) {
    return <h2 style={{ color: "grey" }}>{props.text}</h2>;
  }
  return (
    <h2 style={{ color: "white" }}>
      <strong>{props.text}</strong>
    </h2>
  );
};
