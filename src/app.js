import React, { useState } from "react";
import "./css/app.css";
import Form from "./components/form";
import GoalList from "./components/goalList";

const App = () => {
    const [goal, setGoal] = useState("");
    const [goalList, setGoalList] = useState([]);
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
            />
            <GoalList goalList={goalList} setGoalList={setGoalList} />
        </div>
    );
};

export default App;
