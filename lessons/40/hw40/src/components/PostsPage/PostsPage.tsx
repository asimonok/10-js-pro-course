import React, {FC, useState, useEffect} from 'react';
import style from './PostsPage.module.css';
import PostItem from 'components/PostItem';
import Button from 'components/Button';
import Loading from 'components/Loading';
import {fetchPosts} from 'store/actions/posts';
import {fetchUsers} from 'store/actions/users';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';

const PostsPage: FC = () => {
  const {posts, loading} = useSelector( (state: RootState) => state.posts);
  const {users} = useSelector( (state:RootState) => state.users);
  const userLoading = useSelector( (state:RootState) => state.users.loading);
  const [numberOfPost, setNumberOfPost] = useState(5);
  const dispatch = useDispatch();


    useEffect(() => { 
      dispatch(fetchPosts());
      dispatch(fetchUsers())
      }, [dispatch]);
 
    return (
        <div>{
          !loading && !userLoading ? (
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