import React from "react";
import "./InfoCard.css";

type Props = {
  title: string;
  contentstrong: string;
  content: string;
};

const InfoCard = ({ title, contentstrong, content }: Props) => {
  return (
    <div className="infocard">
      <p className="infocard-header">{title}</p>
      <p className="infocard-header">
        <strong>{contentstrong}</strong>
      </p>
      <p className="infocard-description">{content}</p>
      <div className="arrow">
        <i id="singlearrow" className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default InfoCard;
