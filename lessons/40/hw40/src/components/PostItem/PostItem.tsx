import React, {useState, useContext, useCallback} from 'react';
import {User, Post} from 'types/types'
import {ThemeContext} from 'components/ThemeProvider'
import classNames from 'classnames/bind'
import style from './PostItem.module.css'
import {AuthorModal, Size} from '../AuthorModal'
import {Link} from 'react-router-dom'

interface MyPostListProps {
    post: Post;
    user: User;
    bgColor?: "calm" | "bright";
    border?: "dashed" | "none";
}

const cx = classNames.bind(style);


const PostItem: React.FC<MyPostListProps> = (props) => {
    const {post, user, bgColor = 'calm', border = 'none'} = props;
    const [isOpened, setIsOpened] = useState(true);
    const [theme]= useContext(ThemeContext);

    const handleModal = useCallback(() => {
        setIsOpened(!isOpened)
    }, [isOpened, setIsOpened] )


    return (
        <div className={cx({
            postItem: true,
            dark: theme === "dark",
           }, bgColor, border)}>
            <h2 className={cx({title: true, titleDark: theme === 'dark'})}>{post.title}</h2>
            <p className={style.postBody}>{post.body}</p>
            <div></div>
            <div className={style.postAuthor} onClick={handleModal}>
                <span>Author:</span> {user.name}
            </div>
            <div className={style.details} >
                <Link to={`/posts/${post.id}`}>Post details...</Link>
            </div>
            <AuthorModal user={user} isHidden={isOpened} handleModal={handleModal} theme={theme} size={Size.medium} />
        </div>

    );
};

export default PostItem;