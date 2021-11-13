import React, {FC, useState, useEffect} from 'react';
import {Post, User} from 'types/types';
import style from './PostsPage.module.css';
import PostItem from 'components/PostItem';
import Button from 'components/Button';
import Loading from 'components/Loading';
import { useHistory } from 'react-router-dom';

const PostsPage: FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [numberOfPost, setNumberOfPost] = useState(5);
    const [isloaded, setIsloaded] = useState(false);
    const history = useHistory();

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
 
    return (
        <div>{
            isloaded ? (
                <>
                <div className={style.CardRow}>
                {posts.slice(0,numberOfPost).map(post =>
                <PostItem key={post.id} post={post} user={users.filter(user => user.id === post.userId)[0]}></PostItem>
              )}
            </div>
            <Button 
             name="Show more"
             handleClick={() => {setNumberOfPost(numberOfPost => numberOfPost + 5)}}
            />
           </> ) : <Loading/>
         }</div>
    );
};

export default PostsPage;