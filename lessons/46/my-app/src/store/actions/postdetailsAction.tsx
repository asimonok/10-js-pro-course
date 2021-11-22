import { Action } from "redux";
import { ActionPayload } from "Common/ActionPayload";
import { PostDetailsActionType } from "store/types/types";
import { Dispatch } from "react";
import PostItem from "Common/PostItem";
import CommentItem from "Common/CommentItem";

type FetchPostDetailsAction = Action<PostDetailsActionType.FETCH_POSTS_DETAILS>;
type FetchPostDetailsSuccessAction = ActionPayload<
  PostDetailsActionType.FETCH_POSTS_DETAILS_SUCCESS,
  PostItem
>;
type FetchPostCommentsAction =
  Action<PostDetailsActionType.FETCH_POSTS_COMMENTS>;
type FetchPostCommentsSuccessAction = ActionPayload<
  PostDetailsActionType.FETCH_POSTS_COMMENTS_SUCCESS,
  CommentItem[]
>;
type FetchPostsErrorAction = ActionPayload<
  PostDetailsActionType.FETCH_POSTS_ERROR,
  boolean
>;

export type PostsDetailsAction =
  | FetchPostDetailsAction
  | FetchPostDetailsSuccessAction
  | FetchPostCommentsAction
  | FetchPostCommentsSuccessAction
  | FetchPostsErrorAction;

export const fetchPostDetails = (postId: string) => {
  return (dispatch: Dispatch<PostsDetailsAction>) => {
    dispatch({ type: PostDetailsActionType.FETCH_POSTS_DETAILS });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response): Promise<PostItem> => {
        if (response.ok) {
          return response.json();
        }
        dispatch({
          type: PostDetailsActionType.FETCH_POSTS_ERROR,
          payload: true,
        });
        throw new Error("error ...");
      })
      .then((post) => {
        dispatch({
          type: PostDetailsActionType.FETCH_POSTS_DETAILS_SUCCESS,
          payload: post,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const fetchPostComments = (postId: string) => {
  return (dispatch: Dispatch<PostsDetailsAction>) => {
    dispatch({ type: PostDetailsActionType.FETCH_POSTS_COMMENTS });
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response): Promise<CommentItem[]> => response.json())
      .then((comments) => {
        dispatch({
          type: PostDetailsActionType.FETCH_POSTS_COMMENTS_SUCCESS,
          payload: comments,
        });
      })
      .catch((error) => console.log(error));
  };
};
