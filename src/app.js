import React, { useState, useEffect } from "react";
import "./css/app.css";
import FormContainer from "./components/formContainer";
import GoalListContainer from "./components/goalListContainer";

const App = () => {
    const [goalList, setGoalList] = useState([]);
    const [filteredGoalList, setFilteredGoalList] = useState([]);
    const [categories, setCategories] = useState("all");
    const filteredHandler = () => {
        switch (categories) {
            case "completed":
                setFilteredGoalList(
                    goalList.filter((goal) => goal.completed === true)
                );
                break;
            case "uncompleted":
                setFilteredGoalList(
                    goalList.filter((goal) => goal.completed === false)
                );
                break;
            default:
                setFilteredGoalList(goalList);
                break;
        }
    };
    const saveLocalGoals = () => {
        localStorage.setItem("goalList", JSON.stringify(goalList));
    };
    const getLocalGoals = () => {
        if (localStorage.getItem("goalList") === null) {
            localStorage.setItem("goalList", JSON.stringify([]));
        } else {
            let localGoals = JSON.parse(localStorage.getItem("goalList"));
            setGoalList(localGoals);
        }
    };
    useEffect(() => {
        getLocalGoals();
    }, []);
    useEffect(() => {
        filteredHandler();
        saveLocalGoals();
    }, [goalList, categories]);
    return (
        <div className="app">
            <header>
                <h1>To Do List App</h1>
            </header>
            <FormContainer setCategories={setCategories} />
            <GoalListContainer filteredGoalList={filteredGoalList} />
        </div>
    );
};

export default App;
