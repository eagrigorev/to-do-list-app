import { FILTERED_GOAL_LIST_ADD_ITEM } from "../../const";

export const filteredGoalListAddItem = (goalList) => ({
    type: FILTERED_GOAL_LIST_ADD_ITEM,
    payload: {
        goalList,
    },
});
