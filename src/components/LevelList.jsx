const LevelList = () => {
  return (
    <>
      <div>
        <div className="btn-group shadow-lg">
          <input
            type="radio"
            name="options"
            data-title="A1"
            className="btn btn-white"
            checked
          />
          <input
            type="radio"
            name="options"
            data-title="A2"
            className="btn btn-white"
          />
          <input
            type="radio"
            name="options"
            data-title="B1"
            className="btn btn-white"
          />
          <input
            type="radio"
            name="options"
            data-title="B2"
            className="btn btn-white"
          />
          <input
            type="radio"
            name="options"
            data-title="C1"
            className="btn btn-white"
          />
          <input
            type="radio"
            name="options"
            data-title="C2"
            className="btn btn-white"
          />
        </div>
      </div>
    </>
  );
};

export default LevelList;
