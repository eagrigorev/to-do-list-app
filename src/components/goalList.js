import React from "react";

const GoalList = ({ goal, completeHandler, deleteHandler }) => {
    return (
        <>
            <li className={`${goal.completed ? "completed" : ""}`}>
                <h2>{goal.goalTitle}</h2>
                <p>{goal.goalDescription}</p>
            </li>
            <button className={goal.id} onClick={completeHandler}>
                Complete
            </button>
            <button className={goal.id} onClick={deleteHandler}>
                Delete
            </button>
        </>
    );
};

export default GoalList;
