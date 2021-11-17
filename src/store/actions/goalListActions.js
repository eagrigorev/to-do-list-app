import {
    GOAL_LIST_ADD_ITEM,
    GOAL_LIST_COMPLETE_ITEM,
    GOAL_LIST_DELETE_ITEM,
} from "../../const";

export const goalListAddItem = (goalTitle, goalDescription) => ({
    type: GOAL_LIST_ADD_ITEM,
    payload: {
        goalTitle,
        goalDescription,
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
