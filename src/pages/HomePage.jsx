import BottomNavbar from "../components/BottomNavbar";
import ClassCarousel from "../components/ClassCarousel";
import TopNavbar from "../components/TopNavbar";
import Tabs from "../components/Tabs";
import AddButton from "../components/AddButton";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <TopNavbar />
        <Tabs />
        <ClassCarousel />
        <AddButton />
        <BottomNavbar />
      </div>
    </>
  );
};

export default HomePage;
