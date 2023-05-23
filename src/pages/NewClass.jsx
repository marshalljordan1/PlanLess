import BottomNavbar from "../components/BottomNavbar";
import NewClassForm from "../components/NewClassForm";
import TopNavbar from "../components/TopNavbar";

const NewClass = () => {
  return (
    <>
      <TopNavbar />
      <div className="new-class-page">
        <h1 className="page-title text-base-content">New Class</h1>
        <NewClassForm />
        <BottomNavbar />
      </div>
    </>
  );
};

export default NewClass;
