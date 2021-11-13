import { Dispatch } from "react";
import { PostsAction, PostsActionTypes } from "../../types/posts";
import axios from "axios";
import { ThemeActionTypes } from "../../types/theme";

export const fetchPosts = () => {
  return async (dispatch: Dispatch<PostsAction>) => {
    try {
      dispatch({ type: PostsActionTypes.FETCH_POSTS });
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({ type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: PostsActionTypes.FETCH_POSTS_ERROR, payload: "error" });
    }
  };
};

export const increasePosts = () => {
  return { type: PostsActionTypes.INCREASE_POSTS_NUMBER };
};
//   return async (dispatch: Dispatch<PostsAction>) => {
//     dispatch({ type: PostsActionTypes.INCREASE_POSTS_NUMBER });
//   };
// };

export const changeTheme = () => {
  return { type: ThemeActionTypes.CHANGE_THEME };
};
