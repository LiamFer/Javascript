import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DatabaseProvider } from "./context/DatabaseContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DatabaseProvider>
      <App />
    </DatabaseProvider>
  </StrictMode>
);
