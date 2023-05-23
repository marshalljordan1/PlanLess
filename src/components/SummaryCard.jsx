const SummaryCard = () => {
  return (
    <>
      <div className="card summary-card bg-secondary-focus shadow-xl p-4">
        <button className="btn bg-secondary-focus text-secondary-content btn-xl summary-buttons border-none">
          <span className="number">2</span>
          Upcoming <br /> Lessons
        </button>
        <button className="btn bg-secondary-focus text-secondary-content btn-xl summary-buttons border-none">
          <span className="number">10</span>
          Lesson <br /> Plans
        </button>
      </div>
    </>
  );
};

export default SummaryCard;
