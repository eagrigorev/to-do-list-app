import React from "react";

const GoalList = ({
    filteredGoalList,
    completeHandler,
    deleteHandler,
    displayModeHandler,
}) => {
    return (
        <section>
            <div>
                <h2>Goal List</h2>
                <select onChange={displayModeHandler} name="displayMode">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div>
                <ul>
                    {filteredGoalList.map((goal) => (
                        <li
                            key={goal.id}
                            className={`${goal.completed ? "completed" : ""}`}
                        >
                            <article>
                                <h3>{goal.goalTitle}</h3>
                                <p>{goal.goalDescription}</p>
                                <div>
                                    <button
                                        className={goal.id}
                                        onClick={completeHandler}
                                    >
                                        Complete
                                    </button>
                                    <button
                                        className={goal.id}
                                        onClick={deleteHandler}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default GoalList;
