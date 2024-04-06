import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postsReducer, searchTermReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
  posts: postsReducer,
  searchTerm: searchTermReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
