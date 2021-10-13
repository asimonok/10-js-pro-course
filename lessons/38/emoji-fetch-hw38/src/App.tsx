import React from 'react';
import './App.css';
import EmojiContainer from './components/EmojiContainer'
import Clock from './components/Clock'
import Input from './components/Input'

// здесь должно быть значение текущего поиска

function App() {

  return (
    <div className="App">
        <Clock/>
        <EmojiContainer/>
    </div>
  );
}


export default App;
