import React, {useState, useEffect, useContext, useCallback} from 'react';
import style from './App.module.css';
import {ThemeContext} from './components/ThemeProvider';
import Loading from './components/Loading';
import Button from './components/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  NavLink
} from 'react-router-dom'
import PostsPage from './components/PostsPage';
import UsersPage from './components/UsersPage';
import PostDetailsPage from './components/PostDetailsPage'
import NotFoundPage from './components/NotFoundPage';


function App() {
  const [theme, setTheme]= useContext(ThemeContext);

  document.body.style.color = theme === "light" ? 'var(--bg-color)' : "var(--bg-primery)";
  document.body.style.backgroundColor = theme === "light" ?  "var(--bg-primery)" : 'var(--bg-color)';

  return (
    <Router>
      <div>
        <header className={style.header}>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li>
                <NavLink to="/users" exact activeClassName={style.activeLink}>Users</NavLink>
              </li>
              <li>
                <NavLink to="/posts" exact activeClassName={style.activeLink}>Posts</NavLink>
              </li>
            </ul>
            <Button
            name={`Change mode ${theme}`}
            handleClick={ () => {setTheme(theme === 'dark' ? 'light' : 'dark')}}
          />
          </nav>
          
          
        </header>
        <Switch>
          
          <Route path="/users" exact>
            <UsersPage/>
          </Route>
          <Route path="/posts" exact>
            <PostsPage/>
          </Route>
          <Route path="/posts/:postId" exact>
            <PostDetailsPage/>
          </Route>
          <Route path="/notfound" exact>
            <NotFoundPage/>
          </Route>
          <Redirect to="/posts"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;






