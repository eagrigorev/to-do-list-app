import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGoalList } from "../store/selectors/goalListSelectors";
import {
    goalListDeleteItem,
    goalListCompleteItem,
} from "../store/actions/goalListActions";
import GoalList from "./goalList";

const GoalListContainer = ({ filteredGoalList }) => {
    const dispatch = useDispatch();
    const goalList = useSelector(getGoalList);
    const completeHandler = (event) => {
        dispatch(goalListCompleteItem(+event.target.className));
    };
    const deleteHandler = (event) => {
        dispatch(goalListDeleteItem(+event.target.className));
    };
    return (
        <div>
            <ul>
                {goalList.map((goal) => (
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
