import { Action } from "redux";
import { ActionPayload } from "Common/ActionPayload";
import { PostsActionType } from "store/types/types";
import { Dispatch } from "react";
import PostItem from "Common/PostItem";

type FetchPostAction = Action<PostsActionType.FETCH_POSTS>;
type FetchSuccessPostAction = ActionPayload<
  PostsActionType.FETCH_POSTS_SUCCESS,
  PostItem[]
>;
type LimitPostsAction = ActionPayload<
  PostsActionType.FETCH_POSTS_LIMIT,
  number
>;

export type PostsAction =
  | FetchPostAction
  | FetchSuccessPostAction
  | LimitPostsAction;

export const fetchPosts = (limit: number) => {
  return (dispatch: Dispatch<PostsAction>) => {
    dispatch({ type: PostsActionType.FETCH_POSTS });
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then((response): Promise<PostItem[]> => response.json())
      .then((posts) => {
        dispatch({ type: PostsActionType.FETCH_POSTS_SUCCESS, payload: posts });
      })
      .catch((error) => console.log(error));
  };
};

export const setPostsLimit = (limit: number) => {
  return { type: PostsActionType.FETCH_POSTS_LIMIT, payload: limit };
};
