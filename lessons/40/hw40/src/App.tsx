import React, {useState, useEffect, useContext, useCallback} from 'react';
import './App.css';
import Button from './components/Button'
import {ThemeContext}from './components/ThemeProvider'

import {User, Post} from 'types/types'
import PostItem from './components/PostItem'
import Loading from './components/Loading'


function App() {
  const [theme, setTheme]= useContext(ThemeContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [numberOfPost, setNumberOfPost] = useState(5);
  const [isloaded, setIsloaded] = useState(false);

  const color = theme === "light" ? '#333333' : '#ffffff';
  const backgroundColor = theme === "light" ? "#ffffff" : "#333333";
  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

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
  console.log('render app')



    
  return (
    <>
      {isloaded ? <>
        <Button />

        <div className="CardRow">
          {posts.slice(0,numberOfPost).map(post =>
            <PostItem key={post.id} post={post} user={users.filter(user => user.id === post.userId)[0]}></PostItem>
          )}
        </div>

        <button className={theme} onClick={handleNumberOfPost}>Show more</button>
      </>
      : <Loading isActive={isloaded}/> }
   </>
     
  );
}

export default App;


