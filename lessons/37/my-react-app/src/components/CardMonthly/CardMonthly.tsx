import React from "react";
import "./CardMonthly.css";
import ButtonMonthly from "../ButtonMonthly";

const CardDay = () => (
  <div className="monthly-pass_card">
    <div className="flex-column">
      <h3 className="titlecard-white">&#9937; Monthly Pass</h3>
      <h4 className="subtitle-white">What You'll Get</h4>
      <ul className="card-list">
        <li className="card-list_item">8 hours usage of our coworking space</li>
        <li className="card-list_item">Access to All our rooms</li>
        <li className="card-list_item">Dedicated Desk</li>
        <li className="card-list_item">Free Business Address</li>
        <li className="card-list_item">Free Lunch 1x a day</li>
      </ul>
      <div className="pricing">
        <span className="price">$380</span>
        <span className="period">/month</span>
      </div>
    </div>
    <ButtonMonthly />
  </div>
);

export default CardDay;
