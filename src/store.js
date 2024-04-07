import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { postsReducer, searchTermReducer, reactionsReducer, loaderReducer } from "./reducers";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
  posts: postsReducer,
  searchTerm: searchTermReducer,
  reactedPosts: reactionsReducer,
  loading: loaderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
