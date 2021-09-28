import React from 'react';
import './App.css';

import Header from './components/Header';
import Card from './components/Card';



function App() {

  return (
    <div className="App">
      <Header/>
      <div className="items__row">
        <Card title="Save More" classBg="green"/>
        <Card title="Day Pass"/>
        <Card title="Month Pass"/>
      </div>
    </div>
  );
}

export default App;
