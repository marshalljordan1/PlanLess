import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClassListContextProvider } from "./context/ClassListContext.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { SignUpContextProvider } from "./context/SignUpContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SignUpContextProvider>
      <LoginContextProvider>
        <ClassListContextProvider>
          <App />
        </ClassListContextProvider>
      </LoginContextProvider>
    </SignUpContextProvider>
  </React.StrictMode>
);
