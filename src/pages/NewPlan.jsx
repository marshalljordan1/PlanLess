import BottomNavbar from "../components/BottomNavbar";
import LessonPlan from "../components/LessonPlan";

const NewPlan = () => {
  return (
    <>
      <div className="new-plan-page">
        <LessonPlan />
        <BottomNavbar />
      </div>
    </>
  );
};

export default NewPlan;
