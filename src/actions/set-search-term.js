import { ACTION_TYPE } from "./action-type";


export const setSearchTerm = (searchTerm) => ({
    type: ACTION_TYPE.SET_SEARCH_TERM,
    payload: searchTerm,
});