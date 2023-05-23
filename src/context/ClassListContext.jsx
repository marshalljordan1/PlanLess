import React, { createContext, useState } from "react";

export const ClassListContext = createContext();

export const ClassListContextProvider = ({ children }) => {
  const [className, setClassName] = useState();
  const [level, setLevel] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [classList, setClassList] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const saveData = () => {
    const newClass = {
      id: 0,
      teacherName: "",
      className: className,
      level: level,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
    };
    const existingClasses = JSON.parse(localStorage.getItem("classList")) || [];
    const updatedClasses = [...existingClasses, newClass];
    localStorage.setItem("classList", JSON.stringify(updatedClasses));
    setClassList(updatedClasses);
    console.log(classList);
  };

  const handleClassName = (event) => {
    setClassName(event.target.value);
    setSubmitted(false);
  };

  const handleLevel = (selectedLevel) => {
    setLevel(selectedLevel);
    setSubmitted(false);
  };

  const handleStartDate = (event) => {
    console.log(event.target.value);
    setStartDate(event.target.value);
    setSubmitted(false);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
    setSubmitted(false);
  };

  const handleStartTime = (event) => {
    setStartTime(event.target.value);
    setSubmitted(false);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    saveData();
    setSubmitted(true); // Call the saveData function from the context
  };

  return (
    <ClassListContext.Provider
      value={{
        handleClassName,
        className,
        handleLevel,
        level,
        handleStartDate,
        startDate,
        handleEndDate,
        endDate,
        handleStartTime,
        startTime,
        handleEndTime,
        endTime,
        handleSubmit,
        saveData,
        classList,
        submitted,
      }}
    >
      {children}
    </ClassListContext.Provider>
  );
};
