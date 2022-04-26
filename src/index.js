import React from "react";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { App } from "./pages/app/App";
import reportWebVitals from "./reportWebVitals";
import { restaurants } from "./constants/fixtures";
import { store } from "./root-module";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App restaurants={restaurants} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
