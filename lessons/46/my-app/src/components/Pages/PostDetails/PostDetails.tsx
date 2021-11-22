import React, { useEffect, useState } from "react";
import styles from "./PostDetails.module.css";
import { useParams, useHistory } from "react-router-dom";
import classNames from "classnames/bind";
import Comments from "components/Comments/Comments";
import Loader from "components/Loader";
import { RootState } from "store/store";
import { useDispatch, useSelector } from "react-redux";
import { PostDetailsActionType } from "store/types/types";
import {
  fetchPostComments,
  fetchPostDetails,
} from "store/actions/postdetailsAction";
import PostItem from "Common/PostItem";

const cx = classNames.bind(styles);

interface PostDetailsParams {
  postId: string;
}

const PostDetails: React.FC = () => {
  const dispatch = useDispatch();
  const newTheme = useSelector((state: RootState) => state.theme.theme);
  const { post, comments, loadingPosts, loadingComments, error } = useSelector(
    (state: RootState) => state.postDetails
  );
  const [selectedPost] = useState<PostItem | null>(null);
  const params = useParams<PostDetailsParams>();
  const history = useHistory();

  if (error) {
    history.replace("/notfound");
    dispatch({ type: PostDetailsActionType.FETCH_POSTS_ERROR, payload: false });
  }

  useEffect(() => {
    dispatch(fetchPostDetails(params.postId));
    dispatch(fetchPostComments(params.postId));
  }, [dispatch, params]);

  return (
    <div>
      {!loadingPosts && !loadingComments ? (
        <div className={cx("body", { dark: newTheme === "dark" })}>
          <div>
            <h2 className={styles.title}>
              Comments for post {selectedPost?.id}: {post?.title}
            </h2>
            <div className={styles.body}>{selectedPost?.body}</div>
          </div>
          <div>
            {comments?.map((comment) => {
              return <Comments comment={comment} key={comment.id} />;
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PostDetails;
