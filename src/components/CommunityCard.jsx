const CommunityCard = () => {
  return (
    <>
      <div className="card w-96 bg-secondary shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary-content">
            Explore Plans
            <div className="badge bg-accent border-secondary-content text-secondary-content">
              community
            </div>
          </h2>
          <p className="card-info pb-2 text-secondary-content">
            Discover and share engaging lesson plans with other passionate
            teachers around the world!
          </p>
          <div className="card-actions justify-end">
            <div className="badge bg-accent border-secondary-content text-secondary-content">
              Business English
            </div>
            <div className="badge bg-accent border-secondary-content text-secondary-content">
              Games
            </div>
            <div className="badge bg-accent border-secondary-content text-secondary-content">
              Kids
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
