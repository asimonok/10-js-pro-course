import React from "react";
import Button from "../Button";
import CardList from "../CardList";
import CardTitle from "../CardTitle";
import Price from "../Price";
import "./PlanCard.css";

type Props = {
  title: string;
  content?: string;
  item: string[];
  price: string;
  period: string;
};

const PlanCard = ({ title, item, price, period }: Props) => {
  return (
    <div className="plancard">
      <div className="cardinformation">
        <CardTitle title={title} />
        <p className="plancard-subtitle">What You'll Get </p>
        <CardList itemCard={item} />
        <Price price={price} period={period} />
      </div>
      <Button buttonname="Choose" textmessage={title} />
    </div>
  );
};

export default PlanCard;
