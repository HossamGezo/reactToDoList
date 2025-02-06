import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import TasksProvider from "./context/TasksProvider";
import "./index.css";
import App from "./App.jsx";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>
);
