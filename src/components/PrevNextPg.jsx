import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

const PrevNextPg = () => {
  return (
    <>
      <div className="btn-group grid grid-cols-2">
        <button className="btn btn-white prev-next">
          <CgArrowLongLeft />
        </button>
        <button className="btn btn-white prev-next">
          <CgArrowLongRight />
        </button>
      </div>
    </>
  );
};

export default PrevNextPg;
