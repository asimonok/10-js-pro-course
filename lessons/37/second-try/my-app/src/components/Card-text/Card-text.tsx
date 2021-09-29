import React from "react";

interface TextProps {
  text: String;
}

export const CardText: React.FC<TextProps> = (props) => {
  return <p style={{ color: "white" }}>{props.text}</p>;
};
