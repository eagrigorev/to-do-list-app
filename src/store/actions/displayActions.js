import { DISPLAY_MODE } from "../../const";

export const displayModeChange = (displayMode) => ({
    type: DISPLAY_MODE,
    payload: {
        displayMode,
    },
});
