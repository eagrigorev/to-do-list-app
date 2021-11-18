import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoalList } from "../../store/selectors/goalListSelectors";
import { goalListAddFromLocal } from "../../store/actions/goalListActions";
import FormContainer from "../form/formContainer";
import GoalListContainer from "../goalList/goalListContainer";
import "./css/style.css";

const App = () => {
    const dispatch = useDispatch();
    const goalList = useSelector(getGoalList);
    const saveLocalData = () => {
        localStorage.setItem("goalList", JSON.stringify(goalList));
    };
    const getLocalData = () => {
        if (localStorage.getItem("goalList") === null) {
            localStorage.setItem("goalList", JSON.stringify([]));
        } else {
            let localGoals = JSON.parse(localStorage.getItem("goalList"));
            dispatch(goalListAddFromLocal(localGoals));
        }
    };
    useEffect(() => {
        getLocalData();
    }, []);
    useEffect(() => {
        saveLocalData();
    }, [goalList]);
    return (
        <div className="app">
            <header>
                <h1>ToDo List App</h1>
            </header>
            <FormContainer />
            <GoalListContainer />
        </div>
    );
};

export default App;
