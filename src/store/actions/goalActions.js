import { GOAL_TITLE_CHANGE, GOAL_DESCRIPTION_CHANGE } from "../../const";

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
