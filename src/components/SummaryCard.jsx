const SummaryCard = () => {
  return (
    <>
      <div className="card bg-secondary shadow-xl p-4">
        <button className="btn bg-secondary text-secondary-content btn-xl summary-buttons border-none">
          <span className="number">2</span>
          Upcoming <br /> Lessons
        </button>
        <button className="btn bg-secondary text-secondary-content btn-xl summary-buttons border-none">
          <span className="number">2</span>
          Lesson <br /> Plans
        </button>
      </div>
    </>
  );
};

export default SummaryCard;
