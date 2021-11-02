import React, {FC, useState, useEffect, useContext} from 'react';
import {ThemeContext} from 'components/ThemeProvider'
import {Post, Comment} from 'types/types'
import {useParams, useHistory} from 'react-router-dom'
import style from './PostDetailsPage.module.css';
import classNames from 'classnames/bind';
import CommentItem from 'components/CommentItem';
import Button from 'components/Button'

const cx = classNames.bind(style);

interface PostDetailsPageParams {
    postId: string;
}

const PostDetailsPage:FC =  () => {
    const [theme, setTheme]= useContext(ThemeContext);
    const [post, setPost] = useState<Post | null>();
    const [comments, setComments] = useState<Comment[]>();
    const params = useParams<PostDetailsPageParams>();
    const history = useHistory();

    useEffect(() => {
        debugger;
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
             .then((response):Promise<Post> => {
                 if(response.ok) {
                    return response.json()
                 }
                 throw new Error('error ...') }),
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
             .then((response):Promise<Comment[]> => {
                if(response.ok) {
                    return response.json()
                }
                throw new Error('error ...') }),
        ]).then( ([post, comments])=> {
            setPost(post);
            setComments(comments); 
        }).catch(error => {
            history.replace('/notfound');

        })
    }, [params.postId, history]);

    return (
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
    );
};

export default PostDetailsPage;
