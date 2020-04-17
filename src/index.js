import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { StateContextProvider } from "./context/StateContext";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <StateContextProvider>
    <Router>
      <App />
    </Router>
  </StateContextProvider>,
  document.getElementById("root")
);
