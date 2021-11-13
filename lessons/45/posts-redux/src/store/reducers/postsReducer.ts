import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { loading: true, error: null, posts: [] };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, posts: action.payload };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, posts: [] };
    default:
      return state;
  }
};
