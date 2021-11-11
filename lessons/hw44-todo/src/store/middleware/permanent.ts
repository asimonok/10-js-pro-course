import { Middleware } from "redux"
import { RootState } from "store"

export const permanent: Middleware<{}, RootState> = (store) => (next) => (action) => {
    console.log('logger middelware: ', action );

    const returnValue = next(action);

    localStorage.setItem('state', JSON.stringify(store.getState()))

    console.log('after reducer: ', store.getState())
    return returnValue;
}