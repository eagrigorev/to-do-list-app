import React from "react";

const Form = ({ goal, setGoal, goalList, setGoalList }) => {
    const inputGoalHandler = (event) => {
        setGoal(event.target.value);
    };
    const submitGoalHandler = (event) => {
        event.preventDefault();
        setGoalList([
            ...goalList,
            {
                id: Math.random() * 1000,
                description: goal,
                completed: false,
            },
        ]);
        setGoal("");
    };
    return (
        <form>
            <input value={goal} onChange={inputGoalHandler} type="text" />
            <button onClick={submitGoalHandler}>Submit</button>
            <div>
                <select name="categories">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
