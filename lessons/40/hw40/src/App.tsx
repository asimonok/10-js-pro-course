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
                <NavLink to="/home" exact activeClassName={style.activeLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/home/about" exact  activeClassName={style.activeLink}>About</NavLink>
              </li>
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
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/users" exact>
            <UsersPage/>
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/posts" exact>
            <PostsPage/>
          </Route>
          <Route path="/posts/:postId" exact>
            <PostDetailsPage/>
          </Route>
          <Route path="/home/about"  >
            <About />
          </Route>
          <Redirect to="/posts"/>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;


/* import React, {useState, useEffect, useContext, useCallback} from 'react';
import style from './App.module.css';
import {ThemeContext} from './components/ThemeProvider';
import {User, Post} from 'types/types';
import PostItem from './components/PostItem';
import Loading from './components/Loading';
import Button from './components/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


function App() {
  const [theme, setTheme]= useContext(ThemeContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [numberOfPost, setNumberOfPost] = useState(5);
  const [isloaded, setIsloaded] = useState(false);

 
  document.body.style.color = theme === "light" ? 'var(--bg-color)' : "var(--bg-primery)";
  document.body.style.backgroundColor = theme === "light" ?  "var(--bg-primery)" : 'var(--bg-color)';
  

  useEffect(() => { 
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response):Promise<Post[]> => response.json()),
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response):Promise<User[]> => response.json()), 
    ]).then(([posts, users]) => {
      setPosts(posts);
      setUsers(users);
      setIsloaded(true);
    }).catch(error => console.log(error))
  }, []);

  const handleNumberOfPost = useCallback(
    () => {
      setNumberOfPost(numberOfPost => numberOfPost + 5)
    },
    [setNumberOfPost],
  );

  const styleType = theme === 'light' ? style.light : style.dark;

   
  return (
    <>
      {isloaded ? <>
        <Button
          name={`Change mode ${theme}`}
          handleClick={ () => {setTheme(theme === 'dark' ? 'light' : 'dark')}}
        />
        <div className={style.CardRow}>
          {posts.slice(0,numberOfPost).map(post =>
            <PostItem key={post.id} post={post} user={users.filter(user => user.id === post.userId)[0]}></PostItem>
          )}
        </div>
        <Button 
          name="Show more"
          handleClick={handleNumberOfPost}
          />
      </>
      : <Loading isActive={isloaded}/> }
   </>
     
  );
}

export default App; */




