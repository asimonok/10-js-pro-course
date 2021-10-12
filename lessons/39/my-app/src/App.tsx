import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import EmojiContainer from './components/EmojiContainer';

const App: React.FC<{}> = (props) => {
  const [searchString, setSearchString] = useState('');

  const handleChange = (searchString: string) => {
    setSearchString(searchString);
  };

  return (
    <div className="App">
      <Input
        placeholder="Search Emoji"
        onChange={handleChange}
        searchString={searchString}
      />
      <EmojiContainer searchString={searchString} />
    </div>
  );
};

export default App;
