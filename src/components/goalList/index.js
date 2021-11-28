import React from "react";

const GoalList = ({
    filteredGoalList,
    completeHandler,
    deleteHandler,
    displayModeHandler,
}) => {
    return (
        <section className="goalList">
            <div className="goalList__heading">
                <h2>Goal List</h2>
                <select onChange={displayModeHandler} name="displayMode">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <div>
                <ul className="goalList__items">
                    {filteredGoalList.map((goal) => (
                        <li
                            key={goal.id}
                            className={`${
                                goal.completed
                                    ? "goalList__items__item--completed"
                                    : "goalList__items__item"
                            }`}
                        >
                            <article>
                                <h3>{goal.goalTitle}</h3>
                                <p className="goalList__items__item__category">
                                    📝 {goal.goalCategory}
                                </p>
                                <p>{goal.goalDescription}</p>
                                <div className="goalList__items__item__buttons">
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
