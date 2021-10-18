import React, {useState, useEffect} from 'react';
import Container from './components/Container';
import Preloader from './components/Preloader';
import {Types} from './types/Types';
import './App.css';

type Theme = 'white' | 'black'; 

// type Author = {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   address: {
//     city: string;
//     street: string;
//     suite: string;
//   }
// }

function App() {
  const [posts, setPosts] = useState<Types[]>([]);
  const [rowNumber, setRowNumber] = useState(5);
  const [author, setAuthor] = useState([]);
  const [theme, setTheme] = useState<Theme>('white');

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then( res => {
        if (!res.ok) {
          throw new Error(`Could not fetch url, status: ${res.status}`);
      }
      return res.json();
      } )
      .then( (posts: Types[]) => {
        setPosts(posts)
        console.log(posts);
      }  )
      
  }, [] );

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( res => {
        if (!res.ok) {
          throw new Error(`Could not fetch url, status: ${res.status}`);
      }
      return res.json();
      } )
      .then( (authorData) => {
        setAuthor(authorData)
        console.log(author);
      }  )
      
  }, [] );

 const changeTheme = () => theme === 'white' ? 'black' : 'white';

  return (
  <ThemeContext.Provider value={theme}>
      <div className={`App App__${theme}`}>
      <button 
          className="theme" 
          onClick={ () => setTheme(theme => 'white' ? 'black' : 'white') }> 
          { changeTheme()} theme 
        </button>
     
      {posts.length === 0 ? <Preloader/> :  <Container 
          posts={posts}
          author={author}
          rowNumber={rowNumber}
        />
}

      {/* <Preloader/> */}
      <button className="btn" onClick={() =>  setRowNumber(prevState => prevState + 5)}>Show more</button>
            
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
export const ThemeContext = React.createContext<Theme>('white');