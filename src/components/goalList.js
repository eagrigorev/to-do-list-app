import React from "react";
import Goal from "./goal";

const GoalList = ({ goalList, setGoalList, filteredGoalList }) => {
    return (
        <div>
            <ul>
                {filteredGoalList.map((goal) => (
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
