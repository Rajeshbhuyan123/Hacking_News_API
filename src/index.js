import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FetchAllData from "./components/context/FetchAllData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FetchAllData>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FetchAllData>
  </React.StrictMode>
);
