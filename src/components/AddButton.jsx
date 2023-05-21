import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <>
      <Link to="/new-class">
        <button className="btn add-button btn-active btn-secondary btn-circle btn-lg shadow-xl">
          <AiOutlinePlus size={24} />
        </button>
      </Link>
    </>
  );
};

export default AddButton;
