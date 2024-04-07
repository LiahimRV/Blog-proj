import { ACTION_TYPE } from "../actions";

const initialState = {};

export const reactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_POST_REACTIONS:
            return {
                ...state,
                [action.payload.postId]: action.payload,
            };
        default:
            return state;
    }
};