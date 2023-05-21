import { Datepicker } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const TimePopUp = () => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-6" className="btn btn-primary">
        Select time
      </label>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal sm:modal-middle">
        <div className="modal-box bg-primary">
          <Datepicker controls="['time']" timeFormat="HH:mm" touchUi={true} />
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn btn-secondary">
              Done
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimePopUp;
