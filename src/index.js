import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { App } from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";
import { restaurants } from "./constants/fixtures";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App restaurants={restaurants} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
