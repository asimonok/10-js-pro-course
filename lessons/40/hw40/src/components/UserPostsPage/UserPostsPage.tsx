import React, {FC, useState, useEffect} from 'react';
import UserPostsList from 'components/UserPostsList';
import {Post, User} from 'types/types';
import { useParams} from 'react-router';
import style from './UserPostsPage.module.css';
import Loading from 'components/Loading';
import {Link, useHistory} from 'react-router-dom'
import {fetchUserPosts, fetchUser} from 'store/actions/userPosts'
import {RootState} from 'store/index'
import {useSelector, useDispatch} from 'react-redux'
import {UserPostsActionType} from 'store/actions/userPosts'

interface UserPostsPageParams {
    userId: string;
}

const UserPostsPage: FC = () => {

    const {posts, user, loadingPosts, loadingUser, error} = useSelector((state: RootState) => state.userPosts);
    const dispatch = useDispatch();
    const history = useHistory();

    const params = useParams<UserPostsPageParams>();

    useEffect(() => {
        dispatch(fetchUserPosts(params.userId));
        dispatch (fetchUser(params.userId))

    },[dispatch, params])

    if(error) {
        history.replace('/notfound');
        dispatch({type: UserPostsActionType.FETCH_USER_POSTS_ERROR, payload: false})
    }

    return (
        <div>{
            !loadingPosts && !loadingUser ? (
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