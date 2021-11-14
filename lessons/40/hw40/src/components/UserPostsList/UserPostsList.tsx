import { render } from '@testing-library/react'
import React, {FC} from 'react'
import {Post} from 'types/types'
import style from './UserPostsList.module.css'

interface MyUserPostsListProps {
    posts: Post[]
}

const UserPostsList: FC<MyUserPostsListProps> = ({posts}) => {
    return (
        <div className={style.UserPostsList} >
            {
                posts.map(post => (
                    <div className={style.UserPostItem} key={post.id}>
                        <h4>{post.title}</h4>
                        <div>{post.body}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default UserPostsList