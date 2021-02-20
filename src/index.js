import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import { ContextProvider } from "./Context";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
