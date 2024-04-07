import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postsReducer, searchTermReducer, reactionsReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
  posts: postsReducer,
  searchTerm: searchTermReducer,
  reactedPosts: reactionsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
