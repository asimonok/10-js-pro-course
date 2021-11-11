import { Middleware } from "redux"
import { RootState } from "store"

export const logger: Middleware<{}, RootState> = (store) => (next) => (action) => {
    console.log('logger middelware: ', action );

    const returnValue = next(action);

    console.log('after reducer: ', store.getState())
    return returnValue;
}