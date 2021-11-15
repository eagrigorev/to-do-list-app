import React from "react";
import Goal from "./goal";

const GoalList = ({ goalList, setGoalList }) => {
    return (
        <div>
            <ul>
                {goalList.map((goal) => (
                    <Goal
                        key={goal.id}
                        goal={goal}
                        goalList={goalList}
                        setGoalList={setGoalList}
                    />
                ))}
            </ul>
        </div>
    );
};

export default GoalList;
