import { combineReducers } from "redux";
import { postsReducer } from "store/reducers/posts";

export const rootReducer = combineReducers({
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
