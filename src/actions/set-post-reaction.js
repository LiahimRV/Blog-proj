import { ACTION_TYPE } from "./action-type";

export const setPostReaction = (postId, reactionType) => ({
    type: ACTION_TYPE.SET_POST_REACTIONS,
    payload: {
        postId,
        reactionType,
    },
});

