import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//If you see anything that is being printed twice that is because of the strict mode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
