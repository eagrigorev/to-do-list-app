import { DISPLAY_MODE } from "../../const";

const initialDisplayMode = "all";
export const displayModeReducer = (state = initialDisplayMode, action) => {
    switch (action.type) {
        case DISPLAY_MODE: {
            return action.payload.displayMode;
        }
        default:
            return state;
    }
};
