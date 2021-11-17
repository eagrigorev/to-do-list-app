import { GOAL_TITLE_CHANGE, GOAL_DESCRIPTION_CHANGE } from "../../const";

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
        default:
            return state;
    }
};
