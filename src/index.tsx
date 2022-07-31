import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import App from "./App";
import { AppStateProvider } from "./utils/AppStateContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
