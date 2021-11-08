// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { reducer } from "./reducer/reducer";
import reducerTodos from "./reducer/reducerTodos";

//first try
// export const store = createStore(reducer, composeWithDevTools());

//second try
export const store = configureStore({
  reducer: reducerTodos,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
