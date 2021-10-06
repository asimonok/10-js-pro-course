import React from 'react';
import './App.css';
import EmojiContainer from './components/EmojiContainer'
import Clock from './components/Clock'


function App() {
  return (
    <div className="App">
        <Clock/>
        <EmojiContainer/>
    </div>
  );
}


export default App;
