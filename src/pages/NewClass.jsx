import BottomNavbar from "../components/BottomNavbar";
import NewClassForm from "../components/NewClassForm";

const NewClass = () => {
  return (
    <>
      <div className="new-class-page">
        <h1 className="page-title">Create New Class</h1>
        <NewClassForm />
        <BottomNavbar />
      </div>
    </>
  );
};

export default NewClass;
