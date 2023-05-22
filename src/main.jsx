import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClassListContextProvider } from "./context/ClassListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClassListContextProvider>
      <App />
    </ClassListContextProvider>
  </React.StrictMode>
);
