import { Dispatch } from "react";
import axios from "axios";
import { CommentsAction, CommentsActionTypes } from "../../types/comments";

export const fetchComments = (postId: string) => {
  return async (dispatch: Dispatch<CommentsAction>) => {
    try {
      dispatch({ type: CommentsActionTypes.FETCH_COMMENTS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/${postId}/comments"
      );
      dispatch({ type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: CommentsActionTypes.FETCH_COMMENTS_ERROR, payload: "error" });
    }
  };
};
