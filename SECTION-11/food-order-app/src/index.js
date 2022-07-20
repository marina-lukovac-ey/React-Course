import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ItemsContextProvider from "./components/store/items-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ItemsContextProvider>
    <App />
  </ItemsContextProvider>
);
