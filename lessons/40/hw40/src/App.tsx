import React, {useState, useEffect, useContext, useCallback} from 'react';
import style from './App.module.css';
import {ThemeContext} from './components/ThemeProvider';
import {User, Post} from 'types/types';
import PostItem from './components/PostItem';
import Loading from './components/Loading';
import Button from './components/Button';


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

export default App;


