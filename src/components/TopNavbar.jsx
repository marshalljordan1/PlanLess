import { IoIosMenu } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";

const TopNavbar = () => {
  return (
    <div className="flex bg-primary p-4 items-center top-navbar">
      <div className="flex-none">
        <div className="w-10 h-10 rounded-full ms-1 border"></div>
      </div>
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
        <button className="btn bg-transparent btn-square border-none text-secondary-focus calendar-icon">
          <AiOutlineCalendar />
        </button>
        <button className="btn bg-transparent btn-square border-none text-secondary-focus">
          <IoIosMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default TopNavbar;
