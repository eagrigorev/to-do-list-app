import React, { useState, useEffect } from "react";
import "./css/app.css";
import Form from "./components/form";
import GoalList from "./components/goalList";

const App = () => {
    const [goal, setGoal] = useState("");
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
            <Form
                goalList={goalList}
                setGoalList={setGoalList}
                goal={goal}
                setGoal={setGoal}
                setCategories={setCategories}
            />
            <GoalList
                goalList={goalList}
                setGoalList={setGoalList}
                filteredGoalList={filteredGoalList}
            />
        </div>
    );
};

export default App;
