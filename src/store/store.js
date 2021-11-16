import { createStore, combineReducers } from "redux";
import { goalReducer } from "./reducers/goalReducer";
import { goalListReducer } from "./reducers/goalListReducer";

const rootReducer = combineReducers({
    goal: goalReducer,
    goalList: goalListReducer,
});
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
