import React, { useContext } from "react";
import Schedule from "./Schedule";
import LevelList from "./LevelList";
import { ClassListContext } from "../context/ClassListContext";
import CircleButton from "./CircleButton";
import { TfiAngleRight } from "react-icons/tfi";

const NewClassForm = () => {
  const { handleClassName, className, handleLevel, handleSubmit, submitted } =
    useContext(ClassListContext);

  return (
    <>
      <div className="new-class-form shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="class-name-input">
            <div className="form-title">Class Name:</div>
            <input
              type="text"
              placeholder="Beginners"
              className="input input-bordered border-primary w-full shadow-xl bg-white"
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
              {submitted === false ? (
                <button type="submit" className="btn btn-primary shadow-xl">
                  Submit
                </button>
              ) : (
                <CircleButton
                  to="/plan-class"
                  icon={
                    <TfiAngleRight
                      size={24}
                      className="text-secondary-content"
                    />
                  }
                />
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewClassForm;
