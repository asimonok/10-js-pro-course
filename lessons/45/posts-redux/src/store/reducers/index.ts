import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { usersReducer } from "./usersReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
