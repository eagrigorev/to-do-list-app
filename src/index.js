import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "../src/css/style.css";
import App from "./components/app";
import { store } from "./store";
import reportWebVitals from "../src/reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
