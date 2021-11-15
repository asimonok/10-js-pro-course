import React, { useEffect } from "react";
import styles from "./PostDetails.module.css";
import { Link } from "react-router-dom";
import { generatePath, useParams } from "react-router";
import useTypedSelector from "../../hooks";
import { useActions } from "../../hooks/useActions";
import { PostsType } from "../../types/posts";
import logo from "../Posts/yy3.gif";

// interface PostDetailsFilter {
//   postDetailss: PostsType[];
// }

const PostDetails = () => {
  let params = useParams<{ postId: string }>();
  const { postDetails, loading, error } = useTypedSelector((state) => state.posts);
  const { fetchPostDetails } = useActions();

  useEffect(() => {
    fetchPostDetails(params.postId);
  }, []);

  const postDetailsfilter: any = [];
  postDetailsfilter.push(postDetails);

  if (loading) {
    return <img src={logo} alt="loading..." />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {postDetailsfilter.map((postDetail: PostsType) => {
        return (
          <div className={styles.post} key={postDetail.id}>
            <h2 className={styles.post_title}>{postDetail.title}</h2>
            <p>{postDetail?.body}</p>
            {/* <h2>{params.postId}</h2> */}
            <div>
              <Link
                className={styles.commentLink}
                to={generatePath("/posts/:postId/comments", { postId: postDetail.id + "" })}
              >
                Comment
              </Link>
            </div>
          </div>
        );
      })}

      <button onClick={() => console.log(postDetailsfilter)}>click</button>
    </>
  );
};

export default PostDetails;
