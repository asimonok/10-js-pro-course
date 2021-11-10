import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
// import { reducer } from "./reducer/reducer";
import reducerTodos from "./reducer/reducerTodos";

//first try
const rootReducer = combineReducers({ todos: reducer });
export const storeCasual = createStore(rootReducer, composeWithDevTools());

//second try
export const store = configureStore({
  reducer: reducerTodos,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
