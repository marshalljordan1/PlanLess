import { Link } from "react-router-dom";
import lineCalendar from "../assets/line-calendar.png";

const Hero = () => {
  return (
    <>
      <div className="hero-content">
        <img src={lineCalendar} className="line-calendar" alt="Image 2" />
        <h1 className="page-title text-secondary-content">
          Welcome to PlanLess
        </h1>
      </div>
      <div className="hero-text text-secondary-content">
        <p>
          Simple lesson planning tools that make it easy to create, modify and
          share lesson plans on the run
        </p>
      </div>
      <div className="welcome-button-container">
        <Link to="/sign-up" className="hero-button-container">
          <button className="btn btn-primary shadow-xl">Sign up</button>
        </Link>
        <Link to="/log-in" className="hero-button-container">
          <button className="btn btn-primary shadow-xl">Log in</button>
        </Link>
      </div>
    </>
  );
};

export default Hero;
