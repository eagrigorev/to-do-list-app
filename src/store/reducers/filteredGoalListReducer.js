import { FILTERED_GOAL_LIST_ADD_ITEM } from "../../const";

const initialFilteredGoalList = [];
export const filteredGoalListReducer = (
    state = initialFilteredGoalList,
    action
) => {
    switch (action.type) {
        case FILTERED_GOAL_LIST_ADD_ITEM: {
            return action.payload.goalList;
        }
        default:
            return state;
    }
};
