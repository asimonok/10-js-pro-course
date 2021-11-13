import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  postsNumber: 5,
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return { loading: true, error: null, posts: [], postsNumber: 5 };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return { loading: false, error: null, posts: action.payload, postsNumber: 5 };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return { loading: false, error: action.payload, posts: [], postsNumber: 5 };
    case PostsActionTypes.INCREASE_POSTS_NUMBER:
      return {
        loading: state.loading,
        error: null,
        posts: state.posts,
        postsNumber: state.postsNumber + 5,
      };
    default:
      return state;
  }
};
