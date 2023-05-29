import BottomNavbar from "../components/BottomNavbar";
import LessonPlan from "../components/LessonPlan";
import TopNavbar from "../components/TopNavbar";

const NewPlan = () => {
  return (
    <>
      <div className="new-plan-page">
        <TopNavbar />
        <h1 className="page-title text-base-content">New Plan</h1>
        <LessonPlan />
        <BottomNavbar />
      </div>
    </>
  );
};

export default NewPlan;
