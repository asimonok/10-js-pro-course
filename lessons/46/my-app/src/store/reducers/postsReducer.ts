import * as Actions from "../actions/usersAction";
import { PostsActionType } from "store/types/types";
import PostItem from "Common/PostItem";
import { PostsAction } from "store/actions/postsAction";

type State = {
  posts: PostItem[];
  loading: boolean;
  limit: number;
};

const initialState: State = {
  posts: [],
  loading: false,
  limit: 5,
};

export const postsReducer = (
  state: State = initialState,
  action: PostsAction
): State => {
  switch (action.type) {
    case PostsActionType.FETCH_POSTS: {
      return {
        ...state,
        posts: [],
        loading: true,
      };
    }
    case PostsActionType.FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false,
      };
    }
    case PostsActionType.FETCH_POSTS_LIMIT: {
      return {
        ...state,
        limit: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
