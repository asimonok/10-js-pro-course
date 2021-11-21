import { Middleware } from "redux";

export const perma: Middleware = (store) => (next) => (action) => {
  const returnVal = next(action);
  localStorage.setItem("state", JSON.stringify(store.getState()));
  return returnVal;
};
