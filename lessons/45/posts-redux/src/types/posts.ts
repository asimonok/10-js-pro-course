interface PostsType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
  INCREASE_POSTS_NUMBER = "INCREASE_POSTS_NUMBER",
}

interface FetchPostsAction {
  type: PostsActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: PostsType[];
}

interface FetchPostsErrorAction {
  type: PostsActionTypes.FETCH_POSTS_ERROR;
  payload: string;
}

interface IncreasePostsNumberAction {
  type: PostsActionTypes.INCREASE_POSTS_NUMBER;
}

export interface PostsState {
  posts: PostsType[];
  loading: boolean;
  error: null | string;
  postsNumber: number;
}
export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction
  | IncreasePostsNumberAction;
