import React, { useState, createContext } from "react";

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      setAlert("User already exists.");
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setAlert("User registered successfully!");
    }
  };
  return (
    <SignUpContext.Provider
      value={{
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleSignUp,
        alert,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
