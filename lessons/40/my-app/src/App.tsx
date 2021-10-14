import React, { useState } from 'react';
import './App.css';
import ArticleContainer from './components/ArticleContainer';
import Button from './components/Button';

const App: React.FC<{}> = (props) => {
  const [displayLimit, setDisplayLimit] = useState(5);

  return (
    <div className="App">
      <h1 className="title">My Site</h1>
      <ArticleContainer displayLimit={displayLimit} />
      <Button
        text="Show more"
        onClick={() => setDisplayLimit(displayLimit + 5)}
      />
      {/* <Button text="Change theme" /> */}
    </div>
  );
};

export default App;
