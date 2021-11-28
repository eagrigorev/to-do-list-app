import { GOAL_TITLE_CHANGE, GOAL_DESCRIPTION_CHANGE, GOAL_CATEGORY_CHANGE } from "../misc/const";

export const goalTitleChange = (goalTitle) => ({
    type: GOAL_TITLE_CHANGE,
    payload: {
        goalTitle,
    },
});
export const goalDescriptionChange = (goalDescription) => ({
    type: GOAL_DESCRIPTION_CHANGE,
    payload: {
        goalDescription,
    },
});
export const goalCategoryChange = (goalCategory) => ({
    type: GOAL_CATEGORY_CHANGE,
    payload: {
        goalCategory,
    },
});
