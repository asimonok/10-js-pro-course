import React from "react";
import "./CardTitle.css";

type Props = {
  title: string | string[];
};

const CardTitle = ({ title }: Props) => {
  return (
    <div className="cardtitle">
      <i id="doublearrow" className="fas fa-angle-double-right"></i>
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default CardTitle;
