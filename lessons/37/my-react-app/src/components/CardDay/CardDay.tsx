import React from "react";
import "./CardDay.css";
import ButtonDay from "../ButtonDay";

const CardDay = () => (
  <div className="day-pass_card">
    <div className="flex-column">
      <h3 className="titlecard-white">&#9937; Day Pass</h3>
      <h4 className="subtitle-white">What You'll Get</h4>
      <ul className="card-list">
        <li className="card-list_item">8 hours usage of our coworking space</li>
        <li className="card-list_item">Access to All our rooms</li>
      </ul>
      <div className="pricing">
        <span className="price">$20</span>
        <span className="period">/day</span>
      </div>
    </div>
    <ButtonDay />
  </div>
);

export default CardDay;
