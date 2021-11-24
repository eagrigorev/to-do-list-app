import { DISPLAY_MODE } from "../misc/const";

export const displayModeChange = (displayMode) => ({
    type: DISPLAY_MODE,
    payload: {
        displayMode,
    },
});
