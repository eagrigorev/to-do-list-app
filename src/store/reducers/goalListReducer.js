import {
    GOAL_LIST_ADD_ITEM,
    GOAL_LIST_COMPLETE_ITEM,
    GOAL_LIST_DELETE_ITEM,
} from "../../const";

const initialGoalList = [];
export const goalListReducer = (state = initialGoalList, action) => {
    switch (action.type) {
        case GOAL_LIST_ADD_ITEM: {
            return [
                ...state,
                {
                    id: Math.random() * 1000,
                    completed: false,
                    goalTitle: action.payload.goalTitle,
                    goalDescription: action.payload.goalDescription,
                },
            ];
        }
        case GOAL_LIST_COMPLETE_ITEM: {
            return state.map((element) => {
                if (element.id === action.payload.id) {
                    return {
                        ...element,
                        completed: !element.completed,
                    };
                }
                return element;
            });
        }
        case GOAL_LIST_DELETE_ITEM: {
            return state.filter((element) => element.id !== action.payload.id);
        }
        default:
            return state;
    }
};