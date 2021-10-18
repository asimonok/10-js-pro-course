import React from "react";
import "./Price.css";

type Props = {
  price: string;
  period: string;
};

const Price = ({ price, period }: Props) => {
  return (
    <div className="price">
      <strong className="pricevalue">{price}</strong>/
      <span className="priceperiod">{period}</span>
    </div>
  );
};

export default Price;
