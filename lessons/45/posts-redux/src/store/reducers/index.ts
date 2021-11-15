import { combineReducers } from "redux";
import { commentsReducer } from "./commentsReducer";
import { postsReducer } from "./postsReducer";
import { themeReducer } from "./themeReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  theme: themeReducer,
  comments: commentsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
