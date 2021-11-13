import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { themeReducer } from "./themeReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
