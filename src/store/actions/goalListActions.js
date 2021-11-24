import {
    GOAL_LIST_ADD_ITEM,
    GOAL_LIST_ADD_FROM_LOCAL,
    GOAL_LIST_COMPLETE_ITEM,
    GOAL_LIST_DELETE_ITEM,
} from "../misc/const";

export const goalListAddItem = (goalTitle, goalDescription) => ({
    type: GOAL_LIST_ADD_ITEM,
    payload: {
        goalTitle,
        goalDescription,
    },
});
export const goalListAddFromLocal = (goalList) => ({
    type: GOAL_LIST_ADD_FROM_LOCAL,
    payload: {
        goalList,
    },
});
export const goalListDeleteItem = (id) => ({
    type: GOAL_LIST_DELETE_ITEM,
    payload: {
        id,
    },
});
export const goalListCompleteItem = (id) => ({
    type: GOAL_LIST_COMPLETE_ITEM,
    payload: {
        id,
    },
});
