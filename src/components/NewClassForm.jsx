import React, { useContext } from "react";
import Schedule from "./Schedule";
import LevelList from "./LevelList";
import { ClassListContext } from "../context/ClassListContext";

const NewClassForm = () => {
  const {
    handleClassName,
    className,
    handleLevel,
    handleDay,
    handleStartTime,
    startTime,
    handleEndTime,
    endTime,
    saveData,
    handleSubmit,
  } = useContext(ClassListContext);

  return (
    <>
      <div className="new-class-form shadow-xl">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="form-title">Class Name:</div>
            <input
              type="text"
              placeholder="Beginners"
              className="input input-bordered input-primary w-full max-w-xs shadow-lg bg-white"
              onChange={handleClassName}
              value={className}
            />
          </div>
          <div>
            <h5 className="form-title">Level: </h5>
            <LevelList onChange={handleLevel} />
          </div>

          <div>
            <h5 className="form-title">Schedule: </h5>
            <Schedule />
            <div className="submit">
              <button type="submit" className="btn btn-primary shadow-xl">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewClassForm;
