import React from "react";
import { Header } from "./components/Header/header";
import { Button } from ".//components/Button/button";
import { CardTitle } from "./components/card-title/card-title";
import { CardH2 } from "./components/card-h2/card-h2";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <div className="cards">
        <div className="card-1 green darken-2">
          <CardTitle text="Save More With Goodplans" />
          <CardH2 text="With Goodplans" />
        </div>
        <div className="card-2">
          <CardTitle text="Day Pass" />
          <CardH2 text="What You'll Get" />
          <Button />
        </div>
        <div className="card-3">
          <CardTitle text="Monthly Pass" />
          <CardH2 text="What You'll Get" />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default App;
