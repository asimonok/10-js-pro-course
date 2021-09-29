import React from "react";
import { Header } from "./components/Header/Header";
import { Button } from ".//components/Button/button";
import { CardTitle } from "./components/Card-title/Card-title";
import { CardH2 } from "./components/Card-h2/Card-h2";
import { CardList } from "./components/Card-list/Card-list";
import { Price } from "./components/Price/Price";
import { CardText } from "./components/Card-text/Card-text";

const App: React.FC = () => {
  const lists = ["8 hours usage of our coworking space", "Access to All our rooms"];
  const lists2 = [
    "8 hours usage of our coworking space",
    "Access to All our rooms",
    "Dedicated Desk",
    "Free Business Address",
    "Free Lunch 1x a day",
  ];
  return (
    <div className="App">
      <Header />

      <div className="cards">
        <div className="card-1 green darken-2">
          <CardTitle text=" Save More" icon={false} />
          <CardH2 text="With Goodplans" color={false} />
          <CardText text="Choose a plan and get onboard in minutes. Then get $100 credits for your nex payment" />
          <i className="material-icons iconsWhite">arrow_forward</i>
        </div>
        <div className="card-2">
          <CardTitle text=" Day Pass" icon={true} />
          <CardH2 text="What You'll Get" color={true} />
          <CardList lists={lists} />
          <div className="dotted"></div>
          <Price price="$20" date="/day" />
          <Button />
        </div>
        <div className="card-3">
          <CardTitle text=" Monthly Pass" icon={true} />
          <CardH2 text="What You'll Get" color={true} />
          <CardList lists={lists2} />
          <div className="dotted"></div>
          <Price price="$380" date="/month" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;
