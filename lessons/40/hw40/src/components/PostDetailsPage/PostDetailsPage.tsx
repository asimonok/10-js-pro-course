import React, {FC, useState, useEffect, useContext} from 'react';
import {ThemeContext} from 'components/ThemeProvider';
import {Post, Comment} from 'types/types';
import Loading from 'components/Loading';
import {useParams, useHistory} from 'react-router-dom';
import style from './PostDetailsPage.module.css';
import classNames from 'classnames/bind';
import CommentItem from 'components/CommentItem';
import Button from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {fetchPostDetails, fetchPostComments} from 'store/actions/postDetails'


const cx = classNames.bind(style);

interface PostDetailsPageParams {
    postId: string;
}

const PostDetailsPage:FC =  () => {
    const [theme, setTheme]= useContext(ThemeContext);

    const {post, comments, loadingComments, loadingPosts} = useSelector((state: RootState) => state.postDetails);
    // console.log(comments)

    const params = useParams<PostDetailsPageParams>();
    const history = useHistory();

    const dispatch = useDispatch();

    // const [post, setPost] = useState<Post | null>(); 
    // const [comments, setComments] = useState<Comment[]>();
    

    // useEffect(() => {
    //     Promise.all([
    //         fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    //          .then((response):Promise<Post> => {
    //              if(response.ok) {
    //                 return response.json()
    //              }
    //              throw new Error('error ...') }),
    //         fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
    //          .then((response):Promise<Comment[]> => {
    //             if(response.ok) {
    //                 return response.json()
    //             }
    //             throw new Error('error ...') }),
    //     ]).then( ([post, comments])=> {
    //         setPost(post);
    //         setComments(comments); 
    //     }).catch(error => {
    //         history.replace('/notfound');

    //     })
    // }, [params.postId, history]);


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
