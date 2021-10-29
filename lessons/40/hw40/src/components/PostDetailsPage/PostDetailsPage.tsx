import React, {FC, useState, useEffect} from 'react';
import {Post, Comment} from 'types/types'
import {useParams} from 'react-router-dom'
import style from './PostDetailsPage.module.css';
import CommentItem from 'components/CommentItem'

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
    console.log(params);

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
        }).catch(error => console.log(error))
    }, [params.postId]);

    return (
        <div className={style.postDetails}>
            <h3>Post {post?.id}. {post?.title}</h3>
            <p> {post?.body}</p>
            <div>Comments
               { comments?.map( comment => <CommentItem key={comment.id} comment={comment}/>)}
            </div>

            


        </div>
    );
};

export default PostDetailsPage;

/* 
const UserItemPage: FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const history = useHistory();
    const params = useParams<UserItemPageParams>();

    useEffect(() => { 
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then((response):Promise<User> => response.json())
          .then(user => {
            setUser(user);  
        }).catch(error => console.log(error))
    }, [user, params.id]);
    
    return (
        <div>
            <button onClick={() => history.push('/users')}>Back</button>
            <h1>Page of user {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
            
        </div>
    ); */