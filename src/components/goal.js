import React from "react";

const Goal = ({ goal, goalList, setGoalList }) => {
    const deleteHandler = () => {
        setGoalList(goalList.filter((element) => element.id !== goal.id));
    };
    const completeHandler = () => {
        setGoalList(
            goalList.map((element) => {
                if (element.id === goal.id) {
                    return { ...element, completed: !element.completed };
                }
                return element;
            })
        );
    };
    return (
        <div>
            <li className={`${goal.completed ? "completed" : ""}`}>
                {goal.description}
            </li>
            <button onClick={completeHandler}>Complete</button>
            <button onClick={deleteHandler}>Delete</button>
        </div>
    );
};

export default Goal;
