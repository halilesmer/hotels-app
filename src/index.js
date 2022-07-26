import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./normalize.css";
import App from "./App";
import { BrowserRouter, } from "react-router-dom";
import { AppProvider } from "./component/context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>

        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
