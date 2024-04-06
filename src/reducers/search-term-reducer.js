import { ACTION_TYPE } from "../actions";


const initialSearchState = '';

export const searchTermReducer = (state = initialSearchState, action) => {
    switch (action.type) {
        case ACTION_TYPE.SET_SEARCH_TERM:

            return action.payload;
        default:
            return state;
    }
};



