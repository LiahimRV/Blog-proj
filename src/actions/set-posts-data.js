import { ACTION_TYPE } from "./action-type";

export const setPostsData = (postsData) => {
  return { type: ACTION_TYPE.SET_POSTS_DATA, payload: postsData };
};
