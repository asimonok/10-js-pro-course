import React, {useState, useEffect, useCallback} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Header from './components/Header';
import Button from './components/Button';
import Modal from './components/Modal';
import AuthorInfo from './components/AuthorInfo';
import Preloader from './components/Preloader';
import Container from './Pages/Posts';
import Authors from './Pages/Authors';
import PostDetails from './Pages/PostDetails';

import {PostTypes} from './types/PostTypes';
import {AuthorTypes} from './types/AuthorTypes';

import style from "./App.module.css";
import classNames from 'classnames/bind';
import './App.css';

const cx = classNames.bind(style);

enum Themes{
  white = 'white',
  black = 'black',
}

const App =(): JSX.Element => {
  const [posts, setPosts] = useState<PostTypes[]>([]);
  const [rowNumber, setRowNumber] = useState(5);
  const [author, setAuthor] = useState<AuthorTypes[]>([]);
  const [requestedAuthor, setRequestedAuthor] = useState<AuthorTypes | null>(null);
  const [theme, setTheme]= useState<Themes>(Themes.white);
  const [isloaded, setIsloaded] = useState(false);

  const appClassNames = cx({
    App: theme === 'white',
    App__black: theme === 'black',
  });

  useEffect(() => { 
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response):Promise<PostTypes[]> => response.json()),
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response):Promise<AuthorTypes[]> => response.json()), 
    ]).then(([posts, users]) => {
      setPosts(posts);
      setAuthor(users);
      setIsloaded(true);
    }).catch(error => console.log(error))
  }, []);

  const openAuthorInfoModal = useCallback((requestedAuthorId: number): void => {
    const requestedAuthor = author.find((author) => author.id === requestedAuthorId);

    if (requestedAuthor === undefined) {
      throw new Error('Author not found!');
    }

    setRequestedAuthor(requestedAuthor);
  },
  [author]
);

return (
  <Router>
    <div className={appClassNames}>
      <div className="button__block">
      <Button
        text='change theme'
        onClick={() => setTheme(theme === Themes.white ? Themes.black : Themes.white)} 
      /> 
      </div>
      
      <Header/>

      <Switch>
        <div className="container">
          <Route path="/posts" exact>
            {isloaded ? 
           <>
            <Container 
              openAuthorInfoModal={(requestedUserId) => openAuthorInfoModal(requestedUserId)} 
              posts={posts} 
              authors={author} 
              rowNumber={rowNumber}/>
              <Button 
              text='Show more' 
              onClick={() =>  setRowNumber(prevState => prevState + 5)}/>
           </>
                :  <Preloader isActive={isloaded}/> }

            {requestedAuthor && (
            <Modal close={() => setRequestedAuthor(null)}> 
              <AuthorInfo authorInfo={requestedAuthor}></AuthorInfo>
            </Modal>
              )}
          </Route>

          <Route path="/users" exact>
            {isloaded ? <Authors authors={author}/> : <Preloader isActive={isloaded}/>}
          </Route>

          <Route path="/posts/:postId" exact>
            <PostDetails posts={posts}/>
          </Route>

        </div>
        <Redirect from="/" to="/posts" />
      </Switch>
    </div> 
  </Router>    
);
}

export default App;