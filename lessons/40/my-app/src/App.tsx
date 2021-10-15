import React, { useState, useContext } from 'react';
import './App.css';
import ArticleContainer from './components/ArticleContainer';
import Button from './components/Button';
import { ThemeContext } from './components/ThemeContext/ThemeContext';

const App: React.FC<{}> = (props) => {
  const [displayLimit, setDisplayLimit] = useState(5);
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className={`App ${theme === 'light' ? `light` : `dark`}`}>
      <h1 className={`title ${theme === 'light' ? `light` : `dark`}`}>
        My Site {theme}
      </h1>
      <ArticleContainer displayLimit={displayLimit} />
      <Button
        text="Show more"
        onClick={() => setDisplayLimit(displayLimit + 5)}
      />
      <Button
        text="Change theme"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};

export default App;
