import React, { useState } from 'react';
import './App.css';
import ArticleContainer from './components/ArticleContainer';

const App: React.FC<{}> = (props) => {
  /* const [searchString, setSearchString] = useState('');

  const handleChange = (searchString: string) => {
    setSearchString(searchString);
  }; */

  return (
    <div className="App">
      <ArticleContainer />
    </div>
  );
};

export default App;
