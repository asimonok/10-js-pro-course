import React from "react";
import "./CardListItem.css";

type Props = {
  text: string;
};
const CardListItem = ({ text }: Props) => {
  return (
    <li className="item-list">
      <i id="iconitemlist" className="fas fa-check-circle"></i>
      <span>{text}</span>
    </li>
  );
};

export default CardListItem;
