const ClassCarousel = () => {
  return (
    <>
      <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-lg">
        <div className="carousel-item">
          <div className="card w-96 bg-accent shadow-xl">
            <div className="card-body text-base-content">
              <h1 className="card-title">Starters</h1>
              <div className="card-info">
                <p>
                  <span className="bold">Level: </span>A1
                </p>
                <p>
                  <span className="bold">Schedule: </span>Mon-Thu 18:30-20:00
                </p>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-white shadow-lg">
                  See Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// {/* Render content based on the active tab */}
// {activeTab === "upcoming" && <div>Upcoming Classes Content</div>}
// {activeTab === "previous" && <div>Previous Classes Content</div>}

export default ClassCarousel;
