import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredGoalList } from "../../../store/selectors/filteredGoalListSelectors";
import {
    goalListDeleteItem,
    goalListCompleteItem,
} from "../../../store/actions/goalListActions";
import { filteredGoalListAddItem } from "../../../store/actions/filteredGoalListActions";
import GoalList from "..";
import { getGoalList } from "../../../store/selectors/goalListSelectors";
import { getDisplayMode } from "../../../store/selectors/displaySelectors";
import { displayModeChange } from "../../../store/actions/displayActions";

const GoalListContainer = () => {
    const dispatch = useDispatch();
    const displayMode = useSelector(getDisplayMode);
    const goalList = useSelector(getGoalList);
    const filteredGoalList = useSelector(getFilteredGoalList);
    const completeHandler = (event) => {
        dispatch(goalListCompleteItem(event.target.className));
    };
    const deleteHandler = (event) => {
        dispatch(goalListDeleteItem(event.target.className));
    };
    const goalListDisplay = () => {
        switch (displayMode) {
            case "completed":
                let displayCompleted = goalList.filter(
                    (goal) => goal.completed === true
                );
                dispatch(filteredGoalListAddItem(displayCompleted));
                break;
            case "uncompleted":
                let displayUncompleted = goalList.filter(
                    (goal) => goal.completed === false
                );
                dispatch(filteredGoalListAddItem(displayUncompleted));
                break;
            default:
                dispatch(filteredGoalListAddItem(goalList));
                break;
        }
    };
    const displayModeHandler = (event) => {
        dispatch(displayModeChange(event.target.value));
    };
    useEffect(() => {
        goalListDisplay();
    }, [displayMode, goalList]);
    return (
        <GoalList
            filteredGoalList={filteredGoalList}
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            displayModeHandler={displayModeHandler}
        />
    );
};

export default GoalListContainer;
