import React from "react";

const Form = ({
    inputGoalTitleHandler,
    inputGoalDescriptionHandler,
    goalListAddItemHandler,
    displayModeHandler,
}) => {
    return (
        <form id="goalSubmission">
            <input
                placeholder="Title (required)"
                onChange={inputGoalTitleHandler}
                type="text"
            />
            <textarea
                placeholder="Description"
                onChange={inputGoalDescriptionHandler}
                type="text"
            />
            <button onClick={goalListAddItemHandler} type="submit">
                Submit
            </button>
            <div>
                <select onChange={displayModeHandler} name="displayMode">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;
