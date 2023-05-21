import apple from "../assets/apple.png";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex bg-secondary-focus rounded-box p-4 items-center">
      <div className="flex-none">
        <div className="w-10 h-10 rounded-full ms-1">
          <img src={apple} alt="Apple" />
        </div>
      </div>
      <div className="flex-1">
        <div className="ms-3 ">
          <p className="ms-3 text-base-100 text-xl text-black">Hi, User!</p>
          <p className="ms-3 text-base-100 text-xs text-primary">
            English Teacher
          </p>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn bg-transparent btn-square border-none text-primary">
          <IoIosMenu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
