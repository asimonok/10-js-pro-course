import { Middleware } from "redux";
import { State as RootState } from "store";

export const logger: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    console.log("logger middleware", action);
    const returnValue = next(action);
    console.log("logger after reducer", store.getState());
    return returnValue;
  };
