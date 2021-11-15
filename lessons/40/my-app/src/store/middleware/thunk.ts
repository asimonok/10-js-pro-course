import { Middleware } from "redux";
import { State as RootState } from "store";

export const thunk: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (typeof action === "function") {
      action(store.dispatch, store.getState);
      return;
    }
    return next(action);
  };
