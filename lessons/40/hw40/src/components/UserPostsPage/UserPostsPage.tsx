import React, {FC, useState, useEffect} from 'react';
import UserPostsList from 'components/UserPostsList';
import {Post, User} from 'types/types';
import { useParams, useHistory } from 'react-router';
import style from './UserPostsPage.module.css';
import Loading from 'components/Loading';
import {Link} from 'react-router-dom'
// import Button from 'components/Button'

interface UserPostsPageParams {
    userId: string;
}

const UserPostsPage: FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isloadedPost, setIsloadedPost] = useState(false);
    const [isloadedUser, setIsloadedUser] = useState(false);
    const [user, setUser] = useState<User>();
    const params = useParams<UserPostsPageParams>();
    const history = useHistory();


    console.log(posts)
    console.log(params)


    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.userId}`)
        .then((response):Promise<Post[]> => response.json())
        .then(posts => {
            setPosts(posts);
            setIsloadedPost(true);

        })
        .catch(err => console.log(err))
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        .then((response):Promise<User> => response.json())
        .then(user => {
            setUser(user);
            setIsloadedUser(true);

        })
        .catch(err => console.log(err))
    }, [params])


    return (
        <div>{
            isloadedPost && isloadedUser ? (
                <>
                <div> 
                    <h3 className={style.UserPostHeader}>All posts of <span>{user?.name}</span></h3>
                    <div className={style.BackToUsers}><Link to={`/users`}>Back to users</Link></div>
                    <UserPostsList posts={posts}/>
                </div>
                </>
            ): <Loading/>
        }</div>
    );
};

export default UserPostsPage;