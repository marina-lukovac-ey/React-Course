import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShoppingCartContextProvider from "./components/store/shopping-cart-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShoppingCartContextProvider>
    <App />
  </ShoppingCartContextProvider>
);
