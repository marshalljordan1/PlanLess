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
              <div
                className="carousel-item bg-accent text-accent-content shadow-xl"
                key={item.id}
              >
                <div className="card-body carousel-body text-base-content shadow-xl">
                  <h1 className="card-title text-accent-content">
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
                      {`${
                        item.startDate[8] +
                        item.startDate[9] +
                        "/" +
                        item.startDate[5] +
                        item.startDate[6] +
                        "/" +
                        item.startDate[2] +
                        item.startDate[3]
                      } - ${
                        item.endDate[8] +
                        item.endDate[9] +
                        "/" +
                        item.endDate[5] +
                        item.endDate[6] +
                        "/" +
                        item.endDate[2] +
                        item.endDate[3]
                      }`}
                    </p>
                    <p>
                      <span className="bold">Schedule: </span>
                      {`${item.checkedDays}`}{" "}
                      {`${item.startTime} - ${item.endTime}`}
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary text-white shadow-lg btn-sm">
                      See Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card w-96 bg-accent shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-secondary-content">
                No Upcoming Classes
              </h2>
              <div className="card-actions justify-end">
                <Link to="/new-class">
                  <button className="btn btn-primary text-white shadow-lg btn-sm">
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
