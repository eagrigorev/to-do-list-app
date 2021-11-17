import React from "react";
import FormContainer from "./components/formContainer";
import GoalListContainer from "./components/goalListContainer";
import "./css/app.css";

const App = () => {
    // const saveLocalGoals = () => {
    //     localStorage.setItem("goalList", JSON.stringify(goalList));
    // };
    // const getLocalGoals = () => {
    //     if (localStorage.getItem("goalList") === null) {
    //         localStorage.setItem("goalList", JSON.stringify([]));
    //     } else {
    //         let localGoals = JSON.parse(localStorage.getItem("goalList"));
    //         setGoalList(localGoals);
    //     }
    // };
    // useEffect(() => {
    //     getLocalGoals();
    // }, []);
    return (
        <div className="app">
            <header>
                <h1>To Do List App</h1>
            </header>
            <FormContainer />
            <GoalListContainer />
        </div>
    );
};

export default App;
