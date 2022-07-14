import React from "react"; //old syntax in every component...
import ReactDOM from "react-dom/client";
import "./index.css"; //this is transformed during compiling
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
