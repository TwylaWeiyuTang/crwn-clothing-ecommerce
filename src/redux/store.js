import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from "./rootReducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares))
// applyMiddleware(...middlewares) will spread in all of the values in the middlewares array into
// this function call as individual arguments. In this way, if we ever need to add more things to
// the middleware, we can just add it to this array

export default store