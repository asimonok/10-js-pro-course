import React from 'react';
import {User, Post} from 'types/types'
import './PostItem.css'

interface MyPostListProps {
    post: Post;
    // getUser: (num: number) => void;
    user: User;
}

const PostItem: React.FC<MyPostListProps> = (props) => {
    const {post, user} = props;

    return (
        <div className="post-item">
            <h2>{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-author">
                Author: {user.name}
            </div>
        </div>
    );
};

export default PostItem;