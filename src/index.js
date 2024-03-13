import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component wrapped inside BrowserRouter
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
