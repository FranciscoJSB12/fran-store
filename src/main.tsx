import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ShoppingCartProvider } from "./Context";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
);
