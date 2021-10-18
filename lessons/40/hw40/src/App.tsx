import React, {useState, useEffect, useContext, useCallback} from 'react';
import './App.css';
import Button from './components/Button'
import {ThemeContext, ThemeProvider }from './components/ThemeProvider'
import {ProgressBar} from './components/ProgresBar'
import {User, Post} from 'types/types'
import PostItem from './components/PostItem'


function App() {
  const [theme, setTheme]= useContext(ThemeContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [numberOfPost, setNumberOfPost] = useState(5);

  const [completed, setCompleted] = useState(0);

  useEffect( ()=> {
    const response = fetch(`https://jsonplaceholder.typicode.com/posts`)
    response.then((response):Promise<Post[]> => response.json())
    .then(json => {
      setPosts(json)})
    .catch((error) => console.log(error))
  }, [])

  useEffect( ()=> {
    const response = fetch(`https://jsonplaceholder.typicode.com/users`)
    response.then((response):Promise<User[]> => response.json())
    .then(json => {
      setUsers(json)})
    .catch((error) => console.log(error))
  }, [])


  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);


  const handleNumberOfPost = useCallback(
    () => {
      setNumberOfPost(numberOfPost => numberOfPost + 5)
    },
    [],
  );
  
  return (
    <ThemeProvider>
      <Button />
      <ProgressBar bgcolor={"#00695c"} completed={completed}/>

      <div className="CardRow">
        {posts.slice(0,numberOfPost).map((post, index) =>
          <PostItem key={post.id} post={post} user={users.filter(user => user.id === post.userId ? user.name: '')[0]}></PostItem>
        )}
      </div>
   
      <button onClick={handleNumberOfPost}>Show more</button>
            
    </ThemeProvider>
    
  );
}

export default App;


