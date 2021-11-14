import React from "react";
import Goal from "./goal";

const GoalList = ({ goalList }) => {
    return (
        <div>
            <ul>
                {goalList.map((goal) => (
                    <Goal key={goal.id} goal={goal.description} />
                ))}
            </ul>
        </div>
    );
};

export default GoalList;
