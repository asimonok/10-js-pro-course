import React, {useState, useEffect} from 'react';
import './App.css';
import EmojiContainer from './components/EmojiContainer'
import Input from './components/Input'
import Clock from './components/Clock'

interface Props{}

const App = (props: Props) => {
  const [word, setWord] = useState('');

  
   const updateSearchingWord = (searchingWord: string) => {
      setWord(searchingWord)
    }

    return (
      <div className="App">
        <Clock/>
        <Input
          searchingWord={word} 
          handleChange={updateSearchingWord} 
        />
        <EmojiContainer searchingWord={word} />
      </div>
    )
}

export default App;
