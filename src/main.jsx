import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ClassListContextProvider } from "./context/ClassListContext.jsx";
import { LoginContextProvider } from "./context/LoginContext.jsx";
import { SignUpContextProvider } from "./context/SignUpContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <SignUpContextProvider>
        <LoginContextProvider>
          <ClassListContextProvider>
            <App />
          </ClassListContextProvider>
        </LoginContextProvider>
      </SignUpContextProvider>
    </Router>
  </React.StrictMode>
);
