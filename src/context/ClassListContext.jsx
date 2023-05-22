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
  };

  const handleClassName = (event) => {
    setClassName(event.target.value);
  };

  const handleLevel = (selectedLevel) => {
    setLevel(selectedLevel);
  };

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const handleStartTime = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTime = (event) => {
    setEndTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    saveData(); // Call the saveData function from the context
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
        saveData,
        classList,
        handleSubmit,
      }}
    >
      {children}
    </ClassListContext.Provider>
  );
};
