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
    useEffect(() => {
        goalListDisplay();
    }, [displayMode, goalList]);
    return (
        <div>
            <ul>
                {filteredGoalList.map((goal) => (
                    <GoalList
                        key={goal.id}
                        goal={goal}
                        completeHandler={completeHandler}
                        deleteHandler={deleteHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default GoalListContainer;
