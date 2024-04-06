import { ACTION_TYPE } from "../actions";

const initialPostsState = {
  posts: [],
};

export const postsReducer = (state = initialPostsState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_POSTS_DATA:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};