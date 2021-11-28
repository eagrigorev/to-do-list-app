import { GOAL_TITLE_CHANGE, GOAL_DESCRIPTION_CHANGE, GOAL_CATEGORY_CHANGE } from "../misc/const";

const initialGoal = {};
export const goalReducer = (state = initialGoal, action) => {
    switch (action.type) {
        case GOAL_TITLE_CHANGE: {
            return {
                ...state,
                goalTitle: action.payload.goalTitle,
            };
        }
        case GOAL_DESCRIPTION_CHANGE: {
            return {
                ...state,
                goalDescription: action.payload.goalDescription,
            };
        }
        case GOAL_CATEGORY_CHANGE: {
            return {
                ...state,
                goalCategory: action.payload.goalCategory,
            };
        }
        default:
            return state;
    }
};
