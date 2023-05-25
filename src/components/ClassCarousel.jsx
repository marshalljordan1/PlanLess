import React, { useContext } from "react";
import { ClassListContext } from "../context/ClassListContext";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
const ClassCarousel = () => {
  const { classList, handleDelete } = useContext(ClassListContext);

  return (
    <>
      {" "}
      <>
        {classList && classList.length > 0 ? (
          <div
            className="carousel carousel-center space-x-4 pb-5"
            key={classList.id}
          >
            {classList.map((item) => (
              <div className="carousel-item bg-accent" key={item.id}>
                <div className="card-body text-base-content shadow-xl pb-4">
                  <h1 className="card-title">
                    {item.className}{" "}
                    <button
                      className="btn btn-sm btn-square btn-secondary text-secondary-content shadow-lg"
                      onClick={() => handleDelete(item.id)}
                    >
                      <BsTrash size={15} />
                    </button>
                  </h1>
                  <div className="card-info">
                    <p>
                      <span className="bold">Level: </span>
                      {item.level}
                    </p>
                    <p>
                      <span className="bold">Start/End Date: </span>
                      {`${item.startDate} - ${item.endDate}`}
                    </p>
                    <p>
                      <span className="bold">Schedule: </span>
                      {`${item.checkedDays}`}{" "}
                      {`${item.startTime} - ${item.endTime}`}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white shadow-lg">
                      See Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card no-classes bg-accent">
            <div className="card-body text-base-content shadow-xl">
              <h1 className="card-title">No Upcoming Classes</h1>
              <div className="card-info"></div>
              <div className="card-actions justify-end">
                <Link to="/new-class">
                  <button className="btn btn-primary text-white shadow-lg">
                    Plan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default ClassCarousel;
