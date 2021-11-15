import { PostsAction, PostsActionTypes, PostsState } from "../../types/posts";

const initialState: PostsState = {
  posts: [],
  postDetails: [],
  loading: false,
  error: null,
  postsNumber: 5,
  postId: 1,
};

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS:
      return {
        loading: true,
        error: null,
        posts: [],
        postsNumber: 5,
        postDetails: [],
        postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: action.payload,
        postsNumber: 5,
        postDetails: [],
        postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_ERROR:
      return {
        loading: false,
        error: action.payload,
        posts: [],
        postsNumber: 5,
        postDetails: [],
        postId: state.postId,
      };
    case PostsActionTypes.INCREASE_POSTS_NUMBER:
      return {
        loading: state.loading,
        error: null,
        posts: state.posts,
        postsNumber: state.postsNumber + 5,
        postDetails: [],
        postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS:
      return {
        loading: true,
        error: null,
        posts: [],
        postsNumber: 5,
        postDetails: [],
        postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS_SUCCESS:
      return {
        loading: false,
        error: null,
        posts: state.posts,
        postsNumber: 5,
        postDetails: action.payload,
        postId: state.postId,
      };
    case PostsActionTypes.FETCH_POSTS_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload,
        posts: [],
        postsNumber: 5,
        postDetails: [],
        postId: state.postId,
      };
    case PostsActionTypes.FIND_POST_ID:
      return {
        loading: state.loading,
        error: state.error,
        postDetails: state.postDetails,
        posts: state.posts,
        postsNumber: state.postsNumber,
        postId: action.payload,
      };
    default:
      return state;
  }
};
