import React from "react";
import Form from "..";
import { useSelector, useDispatch } from "react-redux";
import { getGoal } from "../../../store/selectors/goalSelectors";
import {
    goalTitleChange,
    goalDescriptionChange,
} from "../../../store/actions/goalActions";
import { goalListAddItem } from "../../../store/actions/goalListActions";

const FormContainer = () => {
    const dispatch = useDispatch();
    const { goalTitle, goalDescription } = useSelector(getGoal);
    const inputGoalTitleHandler = (event) => {
        dispatch(goalTitleChange(event.target.value));
    };
    const inputGoalDescriptionHandler = (event) => {
        dispatch(goalDescriptionChange(event.target.value));
    };
    const goalListAddItemHandler = (event) => {
        event.preventDefault();
        if (goalTitle != null) {
            dispatch(goalListAddItem(goalTitle, goalDescription));
            dispatch(goalTitleChange());
            dispatch(goalDescriptionChange());
            document.getElementById("goalSubmission").reset();
        }
    };
    return (
        <Form
            inputGoalTitleHandler={inputGoalTitleHandler}
            inputGoalDescriptionHandler={inputGoalDescriptionHandler}
            goalListAddItemHandler={goalListAddItemHandler}
        />
    );
};

export default FormContainer;
