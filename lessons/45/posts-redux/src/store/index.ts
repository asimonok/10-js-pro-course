import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(rootReducer, applyMiddleware(thunk), composeWithDevTools());
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
