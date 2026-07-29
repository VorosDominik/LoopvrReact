import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
 //strict mode vissza ha nem a battle fügvényt szerelgeted mar !!
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ,
);
