import { useContext } from "react";
import { ClassListContext } from "../context/ClassListContext";

const Schedule = () => {
  const {
    handleStartDate,
    handleEndDate,
    startDate,
    endDate,
    handleStartTime,
    handleEndTime,
    startTime,
    endTime,
    isChecked,
  } = useContext(ClassListContext);
  return (
    <>
      <div className="date-time-input">
        <div className="date-pickers">
          Start date: <br />
          <input
            type="date"
            className="date-inputs rounded-box p-1 shadow-xl"
            onChange={handleStartDate}
            value={startDate}
          ></input>
          <br />
          End date: <br />
          <input
            type="date"
            className="date-inputs rounded-box p-1 shadow-xl"
            onChange={handleEndDate}
            value={endDate}
          ></input>
        </div>
        <div className="time-pickers">
          Start Time: <br />
          <input
            type="time"
            className="time-inputs rounded-box p-1 shadow-xl"
            onChange={handleStartTime}
            value={startTime}
          ></input>
          <br />
          End Time: <br />
          <input
            type="time"
            className="time-inputs rounded-box p-1 shadow-xl"
            onChange={handleEndTime}
            value={endTime}
          ></input>
        </div>
      </div>
      <div className="form-title">Choose Days:</div>
      <div className="bg-white border border-gray-300 rounded-box shadow-lg">
        <div className="form-control checkboxes shadow-lg">
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Monday</span>
          </label>
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Tuesday</span>
          </label>
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Wednesday</span>
          </label>
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Thursday</span>
          </label>
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Friday</span>
          </label>
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Saturday</span>
          </label>
          <label className="cursor-pointer label">
            <input type="checkbox" className="checkbox checkbox-secondary" />
            <span className="label-text">Sunday</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Schedule;
