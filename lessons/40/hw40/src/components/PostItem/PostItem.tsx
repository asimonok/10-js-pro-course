import React, {useState, useContext, useCallback} from 'react';
import {User, Post} from 'types/types'
import {ThemeContext} from 'components/ThemeProvider'
import style from './PostItem.module.css'
import AuthorModal from '../AuthorModal'

interface MyPostListProps {
    post: Post;
    user: User;
}

const PostItem: React.FC<MyPostListProps> = (props) => {
    const {post, user} = props;
    const [isOpened, setIsOpened] = useState(true);
    const [theme, setTheme]= useContext(ThemeContext);

    const handleModal = useCallback(() => {
        setIsOpened(!isOpened)
    }, [isOpened, setIsOpened] )

    const styleType = theme === 'light' ? style.dark : style.light;
    

    return (
        <div className={style.postItem + " " + styleType}>
            <h2 className={theme}>{post.title}</h2>
            <p className={`${style["post-body"]} ${theme}`}>{post.body}</p>
            <div className={style["post-author"]} onClick={handleModal}>
                <span>Author:</span> {user.name}
            </div>
            <AuthorModal user={user} isHidden={isOpened} handleModal={handleModal}/>
        </div>

    );
};

export default PostItem;