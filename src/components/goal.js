import React from "react";

const Goal = ({ goal }) => {
    return (
        <div>
            <li>{goal}</li>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    );
};

export default Goal;
