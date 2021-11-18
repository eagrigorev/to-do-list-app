import { FILTERED_GOAL_LIST_ADD_ITEM } from "../misc/const";

export const filteredGoalListAddItem = (goalList) => ({
    type: FILTERED_GOAL_LIST_ADD_ITEM,
    payload: {
        goalList,
    },
});
