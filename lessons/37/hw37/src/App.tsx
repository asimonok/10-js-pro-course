import React from 'react';
import './App.css';

import Header from './components/Header';
import Card from './components/Card';
import GreenCard from './components/GreenCard';



function App() {
  const data = [
    {title:"Save More",  },
    {title:"Day Pass",  price: 20, period:"day"},
    {title:"Month Pass",  price: 380, period:"day"}
  ]

  return (
    <div className="App">
      <Header/>
      <div className="items__row">
        <GreenCard title="Save More"/>
        {/* <Card title="Save More" classBg="green"/> */}
        <Card title="Day Pass"  price="20" period="day"/>
        <Card title="Month Pass" price="380" period="day"/>
      </div>
    </div>
  );
}

export default App;
