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
    case ACTION_TYPE.SET_POST_REACTIONS:
      const { postId, reactionType } = action.payload;
      const updatedPosts = state.posts.map(post => {
        if (post.id === postId) {

          let positiveCount = post.positiveReactionCount;
          let negativeCount = post.negativeReactionCount;

          if (reactionType === 'positive') {
            positiveCount += 1;
          } else if (reactionType === 'negative') {
            negativeCount += 1;
          } else if (reactionType === "removePositive") {
            positiveCount -= 1
          } else if (reactionType === "removeNegative") {
            negativeCount -= 1
          }

          return {
            ...post,
            positiveReactionCount: positiveCount,
            negativeReactionCount: negativeCount,
          };
        }
        return post;
      });
      return {
        ...state,
        posts: updatedPosts,
      };
    default:
      return state;
  }
};