import { Link } from "react-router-dom";

const CircleButton = ({ icon, to }) => {
  return (
    <>
      <Link to={to}>
        <button className="btn add-button btn-active btn-circle btn-lg shadow-xl">
          {icon}
        </button>
      </Link>
    </>
  );
};

export default CircleButton;
