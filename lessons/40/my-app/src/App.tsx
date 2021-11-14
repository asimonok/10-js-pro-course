import React, { FC, useContext, useCallback } from 'react';
import styles from './App.module.css';
import PostContainer from './pages/PostContainer';
import UserList from './pages/UserList';
import Button from './components/Button';
import Header from './components/Header';
import PostDetails from './pages/PostDetails';
import CommentsPage from './pages/CommentsPage';
import { ThemeContext } from './components/ThemeContext';
import { THEMES } from 'constants/THEMES';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

const App: FC<{}> = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    if (theme === THEMES.LIGHT) {
      setTheme(THEMES.DARK);
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      setTheme(THEMES.LIGHT);
      document.documentElement.removeAttribute('theme');
    }
  }, [theme, setTheme]);

  return (
    <Router>
      <div className={styles.App}>
        <Header>
          <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <NavLink
                to="/posts"
                className={styles.link}
                activeClassName={styles.activeLink}
                exact
              >
                Posts
              </NavLink>
            </li>
            <li className={styles.headerListItem}>
              <NavLink
                to="/users"
                className={styles.link}
                activeClassName={styles.activeLink}
                exact
              >
                Users
              </NavLink>
            </li>
          </ul>
          <Button text="Change theme" onClick={toggleTheme} themeButton />
        </Header>

        <Switch>
          <Route path="/posts" exact>
            <h1 className={styles.title}>My Site {theme}</h1>
            <h2 className={styles.subTitle}>Posts</h2>

            <PostContainer />
          </Route>
          <Route path="/users" exact>
            <h2 className={styles.subTitle}>Users</h2>
            <UserList />
          </Route>
          <Route path="/posts/:postId" exact>
            <PostDetails />
          </Route>
          <Route path="/posts/:postId/comments" exact>
            <CommentsPage />
          </Route>
          <Redirect from="/" to="/posts" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
