const DaysList = () => {
  return (
    <div className="mt-2 bg-white border border-gray-300 rounded shadow-lg">
      <div>
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
    </div>
  );
};

export default DaysList;
