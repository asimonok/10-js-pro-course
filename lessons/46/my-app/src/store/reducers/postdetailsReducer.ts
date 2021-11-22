import * as Actions from "../actions/usersAction";
import { PostDetailsActionType } from "store/types/types";
import PostItem from "Common/PostItem";
import CommentItem from "Common/CommentItem";
import { PostsDetailsAction } from "store/actions/postdetailsAction";

type State = {
  post: PostItem;
  comments: CommentItem[];
  loadingPosts: boolean;
  loadingComments: boolean;
  limit: number;
  error: boolean;
};

const initialState: State = {
  post: { userId: 0, id: 0, title: "", body: "" },
  comments: [],
  loadingPosts: false,
  loadingComments: false,
  limit: 5,
  error: false,
};

export const postDetailsReducer = (
  state: State = initialState,
  action: PostsDetailsAction
): State => {
  switch (action.type) {
    case PostDetailsActionType.FETCH_POSTS_DETAILS: {
      return {
        ...state,
        loadingPosts: true,
      };
    }
    case PostDetailsActionType.FETCH_POSTS_DETAILS_SUCCESS: {
      return {
        ...state,
        post: { ...state.post, ...action.payload },
        loadingPosts: false,
      };
    }
    case PostDetailsActionType.FETCH_POSTS_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case PostDetailsActionType.FETCH_POSTS_COMMENTS: {
      return {
        ...state,
        loadingComments: true,
      };
    }
    case PostDetailsActionType.FETCH_POSTS_COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: [...state.comments, ...action.payload],
        loadingComments: false,
      };
    }
    default: {
      return state;
    }
  }
};
