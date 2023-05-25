import React, { createContext, useState } from "react";

export const ClassListContext = createContext();

export const ClassListContextProvider = ({ children }) => {
  const [className, setClassName] = useState("");
  const [level, setLevel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("12:00");
  const [classList, setClassList] = useState([]);
  const [checkedDays, setCheckedDays] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [id, setId] = useState(0);

  const saveData = () => {
    const newClass = {
      id: id,
      className: className,
      level: level,
      startDate: startDate,
      endDate: endDate,
      checkedDays: checkedDays,
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
    setSubmitted(false);
  };

  const handleLevel = (selectedLevel) => {
    setLevel(selectedLevel);
    setSubmitted(false);
  };

  const handleStartDate = (event) => {
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

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedDays((prevCheckedDays) => [...prevCheckedDays, value]);
      setSubmitted(false);
    } else {
      setCheckedDays((prevCheckedDays) =>
        prevCheckedDays.filter((day) => day !== value)
      );
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    if (
      !className ||
      !level ||
      !startDate ||
      !endDate ||
      checkedDays.length === 0 ||
      !startTime ||
      !endTime
    ) {
      alert("Please fill in all required fields.");
    } else {
      setId(id + 1);
      saveData();
      setCheckedDays([]);
      setStartDate("");
      setEndDate("");
      setStartTime("12:00");
      setEndTime("12:00");
      setSubmitted(true); // Call the saveData function from the context
    }
  };

  const handleDelete = (id) => {
    const updatedClasses = classList.filter((classItem) => classItem.id !== id);
    setClassList(updatedClasses);
    localStorage.setItem("classList", JSON.stringify(updatedClasses));
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
        handleCheckboxChange,
        handleSubmit,
        handleDelete,
        classList,
        submitted,
      }}
    >
      {children}
    </ClassListContext.Provider>
  );
};
