import BottomNavbar from "../components/BottomNavbar";
import NewClassForm from "../components/NewClassForm";
import PrevNextPg from "../components/PrevNextPg";

const NewClass = () => {
  return (
    <div className="new-class-page">
      <div>
        <h1>Create New Class</h1>
        <NewClassForm />
        <PrevNextPg />
        <BottomNavbar />
      </div>
    </div>
  );
};

export default NewClass;
