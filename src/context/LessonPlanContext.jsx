import React, { createContext, useState } from "react";

export const LessonPlanContext = createContext();

export const LessonPlanContextProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [lessonObjective, setLessonObjective] = useState("");
  const [wrapUp, setWrapUp] = useState("");
  const [warmUp, setWarmUp] = useState("");

  const handleActivities = (index, value) => {
    const updatedActivities = [...activities];
    updatedActivities[index] = value;
    setActivities(updatedActivities);
  };

  const addActivity = () => {
    setActivities([...activities, ""]);
  };

  const addObjective = (value) => {
    setLessonObjective(value);
  };

  const addWrapUp = (value) => {
    setWrapUp(value);
  };

  const addWarmUp = (value) => {
    setWarmUp(value);
  };

  return (
    <>
      <LessonPlanContext.Provider
        value={{
          handleActivities,
          activities,
          addActivity,
          lessonObjective,
          addObjective,
          wrapUp,
          addWrapUp,
          warmUp,
          addWarmUp,
        }}
      >
        {children}
      </LessonPlanContext.Provider>
    </>
  );
};

export default LessonPlanContextProvider;
