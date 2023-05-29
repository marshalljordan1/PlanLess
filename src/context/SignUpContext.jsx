import React, { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const SignUpContext = createContext();

export const SignUpContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTeacherName = (event) => {
    setTeacherName(event.target.value);
  };

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      setAlert("User already exists.");
      setTimeout(() => {
        navigate("/log-in");
      }, 2000);
    } else {
      const newUser = { teacherName, subject, email, password };
      console.log("New User:", newUser);
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setAlert("User registered successfully!");
      setTimeout(() => {
        navigate("/log-in");
      }, 2000);
    }
  };
  return (
    <SignUpContext.Provider
      value={{
        teacherName,
        subject,
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleSignUp,
        handleTeacherName,
        handleSubject,
        alert,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};
