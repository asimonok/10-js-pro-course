import React from "react";
import "./App.css";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import PlanCard from "./components/PlanCard";

function App() {
  /*const title = ["Day Pass", "Monthly Pass"];*/
  const dayItem = [
    "8 hours usage of our coworking space",
    "Access to All our rooms",
  ];
  const monthItem = [
    "8 hours usage of our coworking space",
    "Access to All our rooms",
    "Dedicated Desk",
    "Free Business Address",
    "Free Lunch 1x a day",
  ];

  return (
    <div className="App">
      <div className="container">
        <Header titleSite="transparent pricing for you" />
        <div className="cardsrow">
          <InfoCard
            title="Save More"
            contentstrong="With Goodplans."
            content="Choose a plan and get onboard in minutes. Then get $100 credits for your
          next payment."
          />
          <PlanCard title="Day Pass" item={dayItem} price="$20" period="day" />
          <PlanCard
            title="Monthly Pass"
            item={monthItem}
            price="$380"
            period="month"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
