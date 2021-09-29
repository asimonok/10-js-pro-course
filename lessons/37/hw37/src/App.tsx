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

  const dayPass = [
    ['8 hour usage of our coworking spase'],
    ['Access to All our rooms'],
  ]
  const monthlyPass = [
    ['8 hour usage of our coworking spase'],
    ['Access to All our rooms'],
    ['Dedicated Desk'],
    ['Free Business Address'],
    ['Free Lunch 1x a day'],
  ]

  return (
    <div className="App">
      <Header/>
      <div className="items__row">
        <GreenCard title="Save More"/>
        {/* <Card title="Save More" classBg="green"/> */}
        <Card title="Day Pass"  price="20" period="day" data={dayPass}/>
        <Card title="Month Pass" price="380" period="day" data={monthlyPass}/>
      </div>
    </div>
  );
}

export default App;
