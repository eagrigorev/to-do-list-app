import React from "react";

const Form = ({
    inputGoalTitleHandler,
    inputGoalDescriptionHandler,
    goalListAddItemHandler,
}) => {
    return (
        <section>
            <h2>New Goal</h2>
            <form id="goalSubmission">
                <div>
                    <input
                        placeholder="Title (required)"
                        onChange={inputGoalTitleHandler}
                        type="text"
                    />
                    <input placeholder="Category" type="text" />
                </div>
                <textarea
                    placeholder="Description"
                    onChange={inputGoalDescriptionHandler}
                    type="text"
                ></textarea>
                <div>
                    <button onClick={goalListAddItemHandler} type="submit">
                        Submit
                    </button>
                    <button>Clear</button>
                </div>
            </form>
        </section>
    );
};

export default Form;
