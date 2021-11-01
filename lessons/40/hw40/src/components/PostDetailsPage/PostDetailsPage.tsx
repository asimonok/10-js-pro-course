import React, {FC, useState, useEffect} from 'react';
import {Post, Comment} from 'types/types'
import {useParams, useHistory, useLocation} from 'react-router-dom'
import style from './PostDetailsPage.module.css';
import CommentItem from 'components/CommentItem';
import Button from 'components/Button'

// interface MyPostDetailsProps {
//     post: Post;
// }

interface PostDetailsPageParams {
    postId: string;
}

const PostDetailsPage:FC =  () => {
    const [post, setPost] = useState<Post | null>();
    const [comments, setComments] = useState<Comment[]>();
    const params = useParams<PostDetailsPageParams>();
    const history = useHistory();

    useEffect(() => {
        Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
             .then((response):Promise<Post> => response.json()),
            fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
             .then((response):Promise<Comment[]> => response.json()),
       ])      
          .then( ([post, comments])=> {
            setPost(post);
            setComments(comments); 
        }).catch(error => {
            history.replace('/posts');

        })
    }, [params.postId, history]);

    // useEffect(() => {
    //     debugger;
    //     Promise.all([
    //         fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    //          .then((response):Promise<Post> => {
    //              if(response.ok) {
    //                 response.json()
    //              }
    //              throw new Error('error ...') }),
    //         fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)
    //          .then((response):Promise<Comment[]> => {
    //             if(response.ok) {
    //                 response.json()
    //             }
    //             throw new Error('error ...') }),
    //     ]).then( ([post, comments])=> {
    //         setPost(post);
    //         setComments(comments); 
    //     }).catch(error => {
    //         history.replace('/notfound');

    //     })
    // }, [params.postId, history]);

    return (
            <div className={style.postDetails}>
                <h3>Post {post?.id}. {post?.title}</h3>
                <p> {post?.body}</p>
                <div>Comments
                   { comments?.map( comment => <CommentItem key={comment.id} comment={comment}/>)}
                </div>
                <Button 
                    name="Back to posts"
                    handleClick={() => {history.push(`/posts`)}}
                />
                {/* <div>This post not founded</div> */}
            </div>
    );
};

export default PostDetailsPage;
