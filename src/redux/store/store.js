import { createStore, applyMiddleware, compose } from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../root-reducer";

const middlewares = [logger, thunk];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
