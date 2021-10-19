import React, {useState, useEffect} from 'react';
import {User, Post} from 'types/types'
import './PostItem.css'
import Modal from '../Modal'

interface MyPostListProps {
    post: Post;
    user: User;
}

const PostItem: React.FC<MyPostListProps> = (props) => {
    const {post, user} = props;
    const [modalState, setModalState] = useState(true);

    const handleModal = () => {
        setModalState(modalState ? false : true)
    } 

    return (
        <div className="post-item">
            <h2>{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-author" onClick={handleModal}>
                Author: {user.name}
            </div>
            <Modal user={user} isHidden={modalState} handleModal={handleModal}/>
        </div>

    );
};

export default PostItem;