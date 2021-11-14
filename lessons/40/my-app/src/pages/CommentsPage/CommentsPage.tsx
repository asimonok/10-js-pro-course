import React, { FC, useEffect } from 'react';
import styles from './CommentsPage.module.css';
import { makeFetch, DataType } from 'redux/actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';
import { Comment } from 'types/Comment';
import { RootState } from 'redux/store/store';
import { useParams } from 'react-router';
import Preloader from 'components/Preloader';

const CommentsPage: FC = () => {
  const dispatch = useDispatch();
  let params = useParams<{ postId: string }>();

  useEffect(() => {
    dispatch(
      makeFetch(
        DataType.Comments,
        fetch('https://jsonplaceholder.typicode.com/comments')
      )
    );
  }, [dispatch]);

  const comments: Comment[] = useSelector((state: RootState) => {
    if (state.data.Comments !== undefined) {
      return state.data.Comments.value;
    }
    return [];
  });

  const filteredComments =
    comments &&
    comments.filter((comment) => {
      return comment.postId === parseInt(params.postId);
    });

  return (
    <>
      <h2 className={styles.pageTitle}>Commemts</h2>
      <div>
        {!filteredComments ? (
          <Preloader />
        ) : (
          filteredComments.map((comment) => {
            return (
              <div className={styles.comments} key={comment.id}>
                <h3 className={styles.commentName}>{comment.name}</h3>
                <p className={styles.commentBody}>{comment.body}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CommentsPage;
