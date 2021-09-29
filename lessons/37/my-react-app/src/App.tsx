import React from "react";
import "./App.css";
import CardSave from "./components/CardSave";
import CardDay from "./components/CardDay";
import CardMonthly from "./components/CardMonthly";

function App() {
  return (
    <div className="App">
      <h2 className="title">Transparent Pricing For You</h2>
      <div className="row">
        <CardSave />
        <CardDay />
        <CardMonthly />
      </div>
    </div>
  );
}

export default App;
