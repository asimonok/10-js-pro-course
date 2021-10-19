import React, { FC, useState, useContext, useCallback } from 'react';
import styles from './App.module.css';
import ArticleContainer from './components/ArticleContainer';
import Button from './components/Button';
import { ThemeContext } from './components/ThemeContext';
import { THEMES } from 'constants/THEMES';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const App: FC<{}> = (props) => {
  const [displayLimit, setDisplayLimit] = useState(5);
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme, setTheme]);

  const changeDisplayLimit = useCallback(() => {
    setDisplayLimit(displayLimit + 5);
  }, [displayLimit, setDisplayLimit]);

  theme === THEMES.DARK
    ? (document.body.style.background = 'black')
    : (document.body.style.background = 'white');

  return (
    <div className={styles.App}>
      <h1
        className={cx({
          title: true,
          title_dark: theme === THEMES.DARK,
        })}
      >
        My Site {theme}
      </h1>
      <ArticleContainer displayLimit={displayLimit} />
      <Button text="Show more" onClick={changeDisplayLimit} />
      <Button text="Change theme" onClick={toggleTheme} />
    </div>
  );
};

export default App;
