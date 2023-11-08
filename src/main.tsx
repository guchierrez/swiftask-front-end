import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MainProvider } from "./providers/MainContext.tsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);
