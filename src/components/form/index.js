import React from "react";

const Form = ({
    inputGoalTitleHandler,
    inputGoalDescriptionHandler,
    goalListAddItemHandler,
}) => {
    return (
        <section className="form">
            <h2>New Goal</h2>
            <form id="goalSubmission">
                <div className="form__inputs">
                    <input
                        className="form__inputs__title"
                        placeholder="Title (required)"
                        onChange={inputGoalTitleHandler}
                        type="text"
                    />
                    <input
                        className="form__inputs__category"
                        placeholder="Category"
                        type="text"
                    />
                    <textarea
                        rows="4"
                        placeholder="Description"
                        onChange={inputGoalDescriptionHandler}
                        type="text"
                    ></textarea>
                </div>
                <div className="form__buttons">
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
