import { Link } from "react-router-dom";
import lineCalendar from "../assets/line-calendar.png";

const Hero = () => {
  return (
    <>
      <div className="hero-content">
        <img src={lineCalendar} className="line-calendar" alt="Image 2" />
        <h1 className="page-title text-secondary-content">
          Effortlessy plan your lessons with PlanLess
        </h1>
      </div>
      <div className="hero-text text-secondary-content">
        <p>
          Simple lesson planning tools that make it easy to create, modify and
          share lesson plans on the run
        </p>
      </div>
      <Link to="/home" className="hero-button-container">
        <button className="btn btn-primary shadow-xl">Let's plan</button>
      </Link>
    </>
  );
};

export default Hero;
