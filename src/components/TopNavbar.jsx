import { IoIosMenu } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
const TopNavbar = () => {
  return (
    <div className="navbar top-navbar bg-primary p-4 items-center">
      <div className="w-10 h-10 rounded-full ms-1 border border-primary-content"></div>
      <div className="flex-1">
        <div className="ms-3 ">
          <p className="ms-3 text-base-100 text-xl text-primary-content">
            Name Surname
          </p>
          <p className="ms-3 text-base-100 text-xs text-primary-content">
            English Teacher
          </p>
        </div>
      </div>
      <div className="flex-none">
        <Link to="/calendar">
          <button className="btn bg-transparent btn-square border-none text-primary-content calendar-icon">
            <AiOutlineCalendar />
          </button>
        </Link>
        <button className="btn bg-transparent btn-square border-none text-primary-content">
          <IoIosMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
