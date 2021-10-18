import React from "react";
import CardListItem from "../CardListItem";
import "./CardList.css";

type Props = {
  itemCard: string[];
};

const CardList = ({ itemCard }: Props) => {
  let items = itemCard.map((item, index) => {
    return <CardListItem key={index} text={item} />;
  });
  return <ul>{items}</ul>;
};

export default CardList;
