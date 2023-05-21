import React, { useState } from "react";
import DaysList from "./DaysList";
import LevelList from "./LevelList";
import { TimePicker } from "react-ios-time-picker";

const NewClassForm = () => {
  const [value, setValue] = useState("10:00");

  const onChange = (timeValue) => {
    setValue(timeValue);
  };
  return (
    <>
      <div className="new-class-form">
        <div>
          <div className="form-title">Class Name:</div>
          <input
            type="text"
            placeholder="Beginners"
            className="input input-bordered input-primary w-full max-w-xs shadow-lg bg-white"
          />
        </div>
        <div>
          <h5 className="form-title">Level: </h5>
          <LevelList />
        </div>

        <div>
          <h5 className="form-title">Schedule: </h5>
          <DaysList />
          <div className="start-end-time">
            <div className="time-pickers">
              <div className="form-title">Start Time:</div>
              <TimePicker
                onChange={onChange}
                value={value}
                className="bg-primary"
              />
            </div>
            <div className="time-pickers">
              <div className="form-title">End Time:</div>
              <TimePicker
                onChange={onChange}
                value={value}
                className="bg-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewClassForm;
