import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postDetailsReducer } from "./reducers/postdetailsReducer";
import { postsReducer } from "./reducers/postsReducer";
import { themeReducer } from "./reducers/themeReducer";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  posts: postsReducer,
  users: usersReducer,
  postDetails: postDetailsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
