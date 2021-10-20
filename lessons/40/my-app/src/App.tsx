import React, {useState, useEffect, useContext} from 'react';
import style from "./App.module.css";
import classNames from 'classnames/bind';
import Container from './components/Container';
import Preloader from './components/Preloader';
import {PostTypes} from './types/PostTypes';
import {AuthorTypes} from './types/AuthorTypes';
import {ThemeContext}from './components/ThemeProvider';
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

  //const changeTheme = theme === 'white' ? style.black : style.white;

  return (
    
    <div className={appClassNames}>
      {isloaded ? 
      <div className="container">
           <button
            className={
              cx({
                btn:true,
                white: theme === 'white',
                black: theme === 'black',
            })}
            onClick={() => setTheme(theme === Themes.white ? Themes.black : Themes.white)} 
          >change theme</button> 
          <Container posts={posts} author={author} rowNumber={rowNumber}/>
         
          <button className={
            cx({
              btn:true,
              white: theme === 'white',
              black: theme === 'black',
          })
          } onClick={() =>  setRowNumber(prevState => prevState + 5)}>Show more</button>
      </div>
      :  <Preloader isActive={isloaded}/> }
    </div> 
    
  );
}

export default App;