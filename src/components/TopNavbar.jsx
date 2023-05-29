import { IoIosMenu } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SignUpContext } from "../context/SignUpContext";
import { useContext } from "react";

const TopNavbar = () => {
  const { teacherName, subject } = useContext(SignUpContext);
  return (
    <div className="navbar top-navbar bg-primary px-4 items-center">
      <div className="w-10 h-10 rounded-full ms-1 border border-primary-content"></div>
      <div className="flex-1">
        <div className="ms-3">
          <p className="ms-3 teacher-name text-base-100 text-xl text-primary-content">
            {teacherName}
          </p>
          <p className="ms-3 teacher-name text-base-100 text-xs text-primary-content">
            {subject} Teacher
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
