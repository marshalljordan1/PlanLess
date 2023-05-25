import { FiHome, FiBookOpen, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
const BottomNavbar = () => {
  return (
    <>
      <div className="bottom-nav bg-primary text-primary-content">
        <Link to="/home">
          <button>
            <FiHome className="h-5 w-5" />
          </button>
        </Link>
        <Link to="/my-lesson-plans">
          <button>
            <FiBookOpen className="h-5 w-5" />
          </button>
        </Link>
        <Link to="/community">
          <button>
            <FiUsers className="h-5 w-5" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default BottomNavbar;
