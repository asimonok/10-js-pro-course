import React from 'react';
import './App.css';
import Input from './components/Input'
import EmojiRow from './components/EmojiRow'
import EmojiContainer from './components/EmojiContainer'
import Clock from './components/Clock'


function App() {
  return (
    <div className="App">
        {/* <Input/> */}
        {/* <EmojiRow/>   */}
        <Clock/>
        <EmojiContainer/>
    </div>
  );
}


export default App;
