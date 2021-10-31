import React from "react";
import { useParams } from "react-router";
import { Comments, Posts } from "../../types";

interface Props {
  posts: Posts[];
  comments: Comments[];
}

const PostDetails: React.FC<Props> = (props) => {
  let params = useParams<{ postId: string }>();
  console.log(params);
  //   props.comments;
  const post = props.posts.find((post) => {
    return post.id === parseInt(params.postId);
  });
  const comment = props.comments.find((comment) => {
    return comment.id === parseInt(params.postId);
  });
  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <div>
        <h2>Comment</h2>
        <p>Name: {comment?.name}</p>
        <p>Email: {comment?.email}</p>
        <p>{comment?.body}</p>
      </div>
    </div>
  );
};
export default PostDetails;
