import { createStore, combineReducers } from "redux";
import { goalReducer } from "./reducers/goalReducer";
import { goalListReducer } from "./reducers/goalListReducer";
import { displayModeReducer } from "./reducers/displayReducer";
import { filteredGoalListReducer } from "./reducers/filteredGoalListReducer";

const rootReducer = combineReducers({
    goal: goalReducer,
    goalList: goalListReducer,
    displayMode: displayModeReducer,
    filteredGoalList: filteredGoalListReducer,
});
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
