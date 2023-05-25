import { useContext } from "react";
import { ClassListContext } from "../context/ClassListContext";

const SummaryCard = () => {
  const { classList } = useContext(ClassListContext);

  return (
    <>
      <div className="card summary-card bg-secondary-focus shadow-xl p-4">
        <button className="btn bg-primary text-white btn-xl summary-buttons border-none shadow-xl">
          <span className="number">
            {classList && classList.length > 0 ? classList.length : "0"}
          </span>
          Upcoming <br /> Lessons
        </button>
        <button className="btn bg-primary text-white btn-xl summary-buttons border-none shadow-xl">
          <span className="number">10</span>
          Lesson <br /> Plans
        </button>
      </div>
    </>
  );
};

export default SummaryCard;
