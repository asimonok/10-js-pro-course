import React, {useState, useContext} from 'react';
import {User, Post} from 'types/types'
import {ThemeContext} from 'components/ThemeProvider'
import './PostItem.css'
import Modal from '../Modal'

interface MyPostListProps {
    post: Post;
    user: User;
}

const PostItem: React.FC<MyPostListProps> = (props) => {
    const {post, user} = props;
    const [modalState, setModalState] = useState(true);
    const [theme, setTheme]= useContext(ThemeContext);

    const handleModal = () => {
        setModalState(modalState ? false : true)
    } 

    return (
        <div className="post-item">
            <h2 className={theme}>{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-author" onClick={handleModal}>
                Author: {user.name}
            </div>
            <Modal user={user} isHidden={modalState} handleModal={handleModal}/>
        </div>

    );
};

export default PostItem;