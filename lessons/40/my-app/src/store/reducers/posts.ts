import { ActionPayload } from "../model";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Author = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    suite: string;
  };
};

type CommentUser = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

enum PostsAction {
  SET_POSTS = "SET_POSTS",
  SET_AUTHORS = "SET_AUTHORS",
  SET_COMMENTS = "SET_COMMENTS",
}

type setPostsAction = ActionPayload<PostsAction, Post[]>;
type setAuthorsAction = ActionPayload<PostsAction, Author[]>;
type setCommentsAction = ActionPayload<PostsAction, CommentUser[]>;

export const setPosts = (posts: Post[]): setPostsAction => {
  return {
    type: PostsAction.SET_POSTS,
    payload: posts,
  };
};

export const setAuthors = (authors: Author[]): setAuthorsAction => {
  return {
    type: PostsAction.SET_AUTHORS,
    payload: authors,
  };
};

export const setComments = (comments: CommentUser[]): setCommentsAction => {
  return {
    type: PostsAction.SET_COMMENTS,
    payload: comments,
  };
};

export type PostsState = {
  posts: Post[];
  authors: Author[];
  comments: CommentUser[];
};

const InitialState: PostsState = {
  posts: [],
  authors: [],
  comments: [],
};

type postsReducerAction = setPostsAction | setAuthorsAction | setCommentsAction;

export const postsReducer = (
  state: PostsState = InitialState,
  action: postsReducerAction
): any => {
  switch (action.type) {
    case PostsAction.SET_POSTS: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case PostsAction.SET_AUTHORS: {
      return {
        ...state,
        authors: action.payload,
      };
    }
    case PostsAction.SET_COMMENTS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
