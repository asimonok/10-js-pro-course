import { Dispatch } from "react";
import { PostsAction, PostsActionTypes } from "../../types/posts";
import axios from "axios";
import { ThemeActionTypes } from "../../types/theme";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      dispatch({ type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: PostsActionTypes.FETCH_POSTS_ERROR, payload: "error" });
    }
  };
};

export const fetchPostDetails = (postId: string) => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      const link = "https://jsonplaceholder.typicode.com/posts/" + postId;
      console.log(link);
      dispatch({ type: PostsActionTypes.FETCH_POSTS_DETAILS });
      const response = await axios.get(link);
      console.log(response.data);
      dispatch({ type: PostsActionTypes.FETCH_POSTS_DETAILS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: PostsActionTypes.FETCH_POSTS_DETAILS_ERROR, payload: "error" });
    }
  };
};

export const increasePosts = () => {
  return { type: PostsActionTypes.INCREASE_POSTS_NUMBER };
};

export const changeTheme = () => {
  return { type: ThemeActionTypes.CHANGE_THEME };
};
