import React from "react";
import "./Price.css";

interface PriceProps {
  price: String;
  date: string;
}

export const Price: React.FC<PriceProps> = (props) => {
  return (
    <p>
      <span className="price">{props.price}</span>
      {props.date}
    </p>
  );
};
