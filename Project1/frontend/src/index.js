import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Use ReactDOM.createRoot for React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
