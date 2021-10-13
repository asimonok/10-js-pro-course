import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Container from './components/Container';
 
// interface Props {}

// interface State {
//   search: string;
// }

function App() {

  const [search, setSearch] = useState('');

  const handleChange = (search: string): void => {
    setSearch(search);
  };

  return (
    <div className="App">
      <h1>EmojiApp</h1>
      <Input onChange={handleChange}/>
      <Container search={search}/>
    </div>
  );
}

export default App;
