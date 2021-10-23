import React, { FC, useState, useContext, useCallback } from 'react';
import styles from './App.module.css';
import ArticleContainer from './components/ArticleContainer';
import AuthorList from './components/AuthorList';
import Button from './components/Button';
import Header from './components/Header';
import { ThemeContext } from './components/ThemeContext';
import { THEMES } from 'constants/THEMES';
import classNames from 'classnames/bind';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

let cx = classNames.bind(styles);

const App: FC<{}> = (props) => {
  const [displayLimit, setDisplayLimit] = useState(5);
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }, [theme, setTheme]);

  theme === THEMES.DARK
    ? (document.body.style.background = '#272727')
    : (document.body.style.background = '#ede0d4');

  const changeDisplayLimit = useCallback(() => {
    setDisplayLimit(displayLimit + 5);
  }, [displayLimit, setDisplayLimit]);

  return (
    <Router>
      <div className={styles.App}>
        <Header>
          <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <NavLink
                to="/posts"
                className={styles.link}
                activeStyle={{
                  textDecoration: 'underline',
                }}
              >
                Posts
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink
                to="/users"
                className={styles.link}
                activeStyle={{
                  textDecoration: 'underline',
                }}
              >
                Users
              </NavLink>
            </li>
          </ul>
          <Button text="Change theme" onClick={toggleTheme} themeButton />
        </Header>

        <Switch>
          <Route path="/posts">
            <h1
              className={cx({
                title: true,
                light: theme === THEMES.DARK,
              })}
            >
              My Site {theme}
            </h1>
            <h2
              className={cx({
                subTitle: true,
                light: theme === THEMES.DARK,
              })}
            >
              Posts
            </h2>
            <ArticleContainer displayLimit={displayLimit} />
            <Button text="Show more" onClick={changeDisplayLimit} />
          </Route>
          <Route path="/users">
            <h2
              className={cx({
                subTitle: true,
                light: theme === THEMES.DARK,
              })}
            >
              Users
            </h2>
            <AuthorList />
          </Route>
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
