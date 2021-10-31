import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./Components/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
