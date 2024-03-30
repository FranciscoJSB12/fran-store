import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { ShoppingCartProvider } from "./Context/ShoppingCartProvider";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </ShoppingCartProvider>
  </React.StrictMode>
);
