import React, { useContext } from "react";
import { ClassListContext } from "../context/ClassListContext";

const ClassCarousel = () => {
  const { classList } = useContext(ClassListContext);

  return (
    <>
      <div className="carousel carousel-center space-x-4 pb-5">
        {classList.length > 0 ? (
          classList.map((item, index) => (
            <div className="carousel-item bg-accent" key={index}>
              <div className="card-body text-base-content shadow-xl pb-4">
                <h1 className="card-title">{item.className}</h1>
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
          ))
        ) : (
          <div className="no-classes text-base-content">
            No upcoming classes
          </div>
        )}
      </div>
    </>
  );
};

export default ClassCarousel;
