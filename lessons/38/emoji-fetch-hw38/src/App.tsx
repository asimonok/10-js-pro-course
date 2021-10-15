import React, {useState, useEffect} from 'react';
import './App.css';
import EmojiContainer from './components/EmojiContainer'
import Input from './components/Input'

interface Props{}

const App = (props: Props) => {
  const [word, setWord] = useState('');

  
   const updateSearchingWord = (searchingWord: string) => {
      setWord(searchingWord)
    }

    return (
      <div className="App">
        <Input
          searchingWord={word} 
          handleChange={updateSearchingWord} 
        />
        <EmojiContainer searchingWord={word} />
      </div>
    )
}

export default App;
