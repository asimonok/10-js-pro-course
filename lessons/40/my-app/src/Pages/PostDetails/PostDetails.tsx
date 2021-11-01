import React from 'react';
import { PostTypes } from '../../types/PostTypes';
import { Link, generatePath, useParams } from 'react-router-dom';
import NoMatch from '../../Pages/NoMatch/NoMatch';

type Props = {
  posts: PostTypes[];
}

enum RoutePath {
    postDetails = '/posts/:postId',
    comments = '/posts/:postId/comments',
  }

const PostDetails = (props: Props) => {
  const { posts } = props;
  const params = useParams<{ postId: string }>();

  const post = posts.find((post) => {
    return post.id === parseInt(params.postId);
  });

  return post ? (
    <div>
      <h2>Post details</h2>
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
      <Link to={generatePath(RoutePath.comments, {
          postId: post.id!,
        })}>
        Comments
      </Link>
    </div>
  ) : (
    <NoMatch />
  );
};

export default PostDetails;