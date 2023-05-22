const CommunityCard = () => {
  return (
    <>
      <div className="card w-96 bg-secondary-focus shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary-content">
            Explore Plans
            <div className="badge badge-secondary">community</div>
          </h2>
          <p className="card-info pb-2 text-secondary-content">
            Connect with a vibrant online community of passionate teachers and
            share engaging lesson plans for an enhanced classroom experience!
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-secondary">Business English</div>
            <div className="badge badge-secondary">Games</div>
            <div className="badge badge-secondary">Kids</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
