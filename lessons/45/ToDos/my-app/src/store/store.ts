import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { todosReducer } from "./reducers/todo";

const rootReducer = combineReducers({
  todos: todosReducer,
});
//const rootReducer = combineReducers({
//  todoinput: inputReduce,
//});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeWithDevTools());
