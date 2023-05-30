import React, { createContext, useState } from "react";

export const LessonPlanContext = createContext();

export const LessonPlanContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const handleActivities = (e) => {
    const updatedActivities = [...activities];
    updatedActivities[index] = e.target.value;
    setActivities(updatedActivities);
  };

  const addActivity = () => {
    setActivities([...activities, ""]);
  };

  return (
    <>
      <LessonPlanContext.Provider
        value={{ handleActivities, activities, addActivity }}
      >
        {children}
      </LessonPlanContext.Provider>
    </>
  );
};

export default LessonPlanContextProvider;
