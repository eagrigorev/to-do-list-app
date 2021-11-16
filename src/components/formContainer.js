import React from "react";
import Form from "./form";
import { useSelector, useDispatch } from "react-redux";
import { getGoal } from "../store/selectors/goalSelectors";
import {
    goalTitleChange,
    goalDescriptionChange,
} from "../store/actions/goalActions";
import { goalListAddItem } from "../store/actions/goalListActions";

const FormContainer = ({ setCategories }) => {
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
    const categoriesHandler = (event) => {
        setCategories(event.target.value);
    };
    return (
        <Form
            inputGoalTitleHandler={inputGoalTitleHandler}
            inputGoalDescriptionHandler={inputGoalDescriptionHandler}
            goalListAddItemHandler={goalListAddItemHandler}
            categoriesHandler={categoriesHandler}
        />
    );
};

export default FormContainer;
