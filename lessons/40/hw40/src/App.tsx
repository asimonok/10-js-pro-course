import React, {useState, useEffect, useContext, useCallback} from 'react';
import './App.css';
import Button from './components/Button'
import {ThemeContext, ThemeProvider }from './components/ThemeProvider'
import {ProgressBar} from './components/ProgresBar'
import {User, Post} from 'types/types'
import PostItem from './components/PostItem'
import Loading from './components/Loading'


function App() {
  const [theme, setTheme]= useContext(ThemeContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [numberOfPost, setNumberOfPost] = useState(5);
  const [isloaded, setIsloaded] = useState(false);
  
  const [completed, setCompleted] = useState(0);

  // useEffect( ()=> {
  //   const response = fetch(`https://jsonplaceholder.typicode.com/posts`)
  //   response.then((response):Promise<Post[]> => response.json())
  //   .then(json => {
  //     setPosts(json)
  //     setIsloaded(true);

  //   })
  //   .catch((error) => console.log(error))
  // }, [])

  // useEffect( ()=> {
  //   const response = fetch(`https://jsonplaceholder.typicode.com/users`)
  //   response.then((response):Promise<User[]> => response.json())
  //   .then(json => {
  //     setUsers(json)})
  //   .catch((error) => console.log(error))
  // }, [])


    Promise.all<Promise<Post[]>, Promise<User[]> >([
      fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.json()),
      fetch(`https://jsonplaceholder.typicode.com/users`).then((response) => response.json())
    ]).then(([posts, users]) => {
      console.log(posts);
      setIsloaded(true);

    })

  // let foo: [Promise<Post[]>, Promise<User[]>] = [fetch(`https://jsonplaceholder.typicode.com/posts`).then((response):Promise<Post[]> => response.json()),
  // fetch(`https://jsonplaceholder.typicode.com/users`).then((response):Promise<User[]> => response.json())]

  // useEffect(() => {
  //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);


  const handleNumberOfPost = useCallback(
    () => {
      setNumberOfPost(numberOfPost => numberOfPost + 5)
    },
    [setNumberOfPost],
  );



    
  return (
    <ThemeProvider>
      <Loading isActive={isloaded}/>
      {/* <div className={`${isloaded ? 'loaded' : 'loading'}`}> Loading...</div> */}
      <Button />
      
      <ProgressBar bgcolor="#00695c" completed={completed}/>

      <div className="CardRow">
        {posts.slice(0,numberOfPost).map((post, index) =>
          <PostItem key={post.id} post={post} user={users.filter(user => user.id === post.userId ? user.name: '')[0]}></PostItem>
        )}
      </div>
   
      <button className="show-more" onClick={handleNumberOfPost}>Show more</button>
            
    </ThemeProvider>
    
  );
}

export default App;


