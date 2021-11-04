import React, { FC, useState, useContext, useCallback, useEffect } from 'react';
import styles from './App.module.css';
import PostContainer from './pages/PostContainer';
import UserList from './pages/UserList';
import Button from './components/Button';
import Header from './components/Header';
import PostDetails from './pages/PostDetails';
import CommentsPage from './pages/CommentsPage';
import { Post } from 'types/Post';
import { User } from 'types/User';
import Preloader from 'components/Preloader';
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
  const [posts, setposts] = useState<Post[]>([]);
  const [users, setusers] = useState<User[]>([]);
  const [ispostsLoaded, setIspostsLoaded] = useState(false);
  const [isusersLoaded, setIsusersLoaded] = useState(false);

  const getposts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response): Promise<Post[]> => {
        return response.json();
      })
      .then((data) => {
        setposts(data);
        setIspostsLoaded(true);
      })
      .catch((e) => console.error(e));
  };

  const getusers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response): Promise<User[]> => {
        return response.json();
      })
      .then((data) => {
        setusers(data);
        setIsusersLoaded(true);
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getposts();
    getusers();
  }, []);

  const toggleTheme = useCallback(() => {
    if (theme === THEMES.LIGHT) {
      setTheme(THEMES.DARK);
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      setTheme(THEMES.LIGHT);
      document.documentElement.removeAttribute('theme');
    }
  }, [theme, setTheme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

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
            {!ispostsLoaded && !isusersLoaded ? (
              <Preloader />
            ) : (
              <PostContainer posts={posts} users={users} />
            )}
          </Route>
          <Route path="/users" exact>
            <h2 className={styles.subTitle}>Users</h2>
            {!isusersLoaded ? <Preloader /> : <UserList users={users} />}
          </Route>
          <Route path="/posts/:postId" exact>
            <PostDetails posts={posts} />
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
