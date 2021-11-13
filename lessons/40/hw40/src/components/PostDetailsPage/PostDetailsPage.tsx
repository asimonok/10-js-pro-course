import React, {FC, useEffect, useContext} from 'react';
import {ThemeContext} from 'components/ThemeProvider';
import Loading from 'components/Loading';
import {useParams, useHistory} from 'react-router-dom';
import style from './PostDetailsPage.module.css';
import classNames from 'classnames/bind';
import CommentItem from 'components/CommentItem';
import Button from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {fetchPostDetails, fetchPostComments, PostDetailsActionType} from 'store/actions/postDetails'

const cx = classNames.bind(style);

interface PostDetailsPageParams {
    postId: string;
}

const PostDetailsPage:FC =  () => {
    const [theme]= useContext(ThemeContext);

    const {post, comments, loadingComments, loadingPosts, error} = useSelector((state: RootState) => state.postDetails);
    const params = useParams<PostDetailsPageParams>();
    const history = useHistory();

    const dispatch = useDispatch();

    if(error) {
        history.replace('/notfound');
        dispatch({type: PostDetailsActionType.FETCH_POST_ERROR, payload: false})
    }

    useEffect(() => {
        dispatch(fetchPostDetails(params.postId))
        dispatch(fetchPostComments(params.postId))
    }, [dispatch, params]);

    return (
        <div>{
            !loadingPosts && !loadingComments ? (<>
                <div className={cx({
                    postDetails: true,
                    dark:  theme === "dark",
                     })}>
                <h3>Post {post?.id}. {post?.title}</h3>
                <p> {post?.body}</p>
                <div className={style.comment}>Comments
                    { comments?.map( comment => <CommentItem key={comment.id} comment={comment}/>)}
                </div>
                <Button 
                    name="Back to posts"
                    handleClick={() => {history.push(`/posts`)}}
                />
            </div>
            </>) : <Loading/>
            
            
        }</div>
           
    );
};

export default PostDetailsPage;
