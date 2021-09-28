import React from "react";
import { Header } from "./components/Header/header";
import { Button } from ".//components/Button/button";
import { CardTitle } from "./components/card-title/card-title";
import { CardH2 } from "./components/card-h2/card-h2";
import { CardList } from "./components/Card-list/Card-list";
import { Price } from "./components/Price/price";

const App: React.FC = () => {
  const lists = [1, 2, 3];
  const lists2 = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <Header />

      <div className="cards">
        <div className="card-1 green darken-2">
          <CardTitle text="Save More With Goodplans" />
          <CardH2 text="With Goodplans" />
          <i className="material-icons">arrow_forward</i>
        </div>
        <div className="card-2">
          <CardTitle text="Day Pass" />
          <CardH2 text="What You'll Get" />
          <CardList lists={lists} />
          <div className="sad dotted"></div>
          <Price price="$20/day" />
          <Button />
        </div>
        <div className="card-3">
          <CardTitle text="Monthly Pass" />
          <CardH2 text="What You'll Get" />
          <CardList lists={lists2} />
          <div className="sad dotted"></div>
          <Price price="$380/month" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;
