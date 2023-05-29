import React, { useContext, useState } from "react";
import { ClassListContext } from "../context/ClassListContext";

const LessonPlan = () => {
  const { classList } = useContext(ClassListContext);
  const lastSubmittedClass = classList[classList.length - 1];

  const [counter, setCounter] = useState(1);

  const addActivity = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="carousel-item bg-accent shadow-xl">
        <div className="card-body carousel-body text-base-content">
          <p>
            <span className="bold">Class Name: </span>
            {lastSubmittedClass.className}
          </p>
          <p>
            <span className="bold">Level: </span>
            {lastSubmittedClass.level}
          </p>
          <p>
            <span className="bold">Start/End Date: </span>
            {lastSubmittedClass.startDate[8] +
              lastSubmittedClass.startDate[9] +
              "/" +
              lastSubmittedClass.startDate[5] +
              lastSubmittedClass.startDate[6] +
              "/" +
              lastSubmittedClass.startDate[2] +
              lastSubmittedClass.startDate[3] +
              " - " +
              lastSubmittedClass.endDate[8] +
              lastSubmittedClass.endDate[9] +
              "/" +
              lastSubmittedClass.endDate[5] +
              lastSubmittedClass.endDate[6] +
              "/" +
              lastSubmittedClass.endDate[2] +
              lastSubmittedClass.endDate[3]}
          </p>
          <p>
            <span className="bold">Schedule: </span>
            {lastSubmittedClass.checkedDays +
              " " +
              lastSubmittedClass.startTime +
              " - " +
              lastSubmittedClass.endTime}{" "}
          </p>
        </div>
      </div>

      <div className="lesson-objectives">
        <div className="form-title">Lesson Objectives:</div>
        <input
          type="text"
          placeholder="Today we are going to..."
          className="input input-bordered input-primary bg-white w-full max-w-xs"
        />
      </div>
      <div>
        <div className="form-title">Warm up / Intro:</div>
        <input
          type="text"
          placeholder="Introduction"
          className="input input-bordered input-primary bg-white w-full max-w-xs"
        />
      </div>

      {counter >= 1 ? (
        <div>
          {" "}
          <div className="form-title">Activity {counter}:</div>
          <textarea
            type="textarea"
            placeholder="Activity"
            className="input input-bordered input-primary bg-white w-full max-w-xs"
          />{" "}
        </div>
      ) : (
        "null"
      )}

      <div>
        <input
          type="file"
          className="file-input file-input-primary file-input-bordered bg-white file-input-sm w-full max-w-xs mt-5"
        />
      </div>
    </>
  );
};

export default LessonPlan;
