import { useContext } from "react";
import { ClassListContext } from "../context/ClassListContext";

const LevelList = () => {
  const { handleLevel, level } = useContext(ClassListContext);

  return (
    <>
      <div>
        <div className="btn-group shadow-lg">
          <input
            type="radio"
            name="options"
            data-title="A1"
            className="btn btn-white level-btn border-primary"
            checked={level === "A1"}
            onChange={() => handleLevel("A1")}
          />
          <input
            type="radio"
            name="options"
            data-title="A2"
            className="btn btn-white level-btn border-primary"
            checked={level === "A2"}
            onChange={() => handleLevel("A2")}
          />
          <input
            type="radio"
            name="options"
            data-title="B1"
            className="btn btn-white level-btn border-primary"
            checked={level === "B1"}
            onChange={() => handleLevel("B1")}
          />
          <input
            type="radio"
            name="options"
            data-title="B2"
            className="btn btn-white level-btn border-primary"
            checked={level === "B2"}
            onChange={() => handleLevel("B2")}
          />
          <input
            type="radio"
            name="options"
            data-title="C1"
            className="btn btn-white level-btn border-primary"
            checked={level === "C1"}
            onChange={() => handleLevel("C1")}
          />
          <input
            type="radio"
            name="options"
            data-title="C2"
            className="btn btn-white level-btn border-primary"
            checked={level === "C2"}
            onChange={() => handleLevel("C2")}
          />
        </div>
      </div>
    </>
  );
};

export default LevelList;
