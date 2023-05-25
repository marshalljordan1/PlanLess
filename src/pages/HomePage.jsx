import BottomNavbar from "../components/BottomNavbar";
import ClassCarousel from "../components/ClassCarousel";
import TopNavbar from "../components/TopNavbar";
import CircleButton from "../components/CircleButton";
import { AiOutlinePlus } from "react-icons/ai";
import SummaryCard from "../components/SummaryCard";
import CommunityCard from "../components/CommunityCard";

const HomePage = () => {
  return (
    <>
      <TopNavbar />
      <div className="home-page">
        <SummaryCard />
        <ClassCarousel />
        <CommunityCard />
        <CircleButton
          icon={<AiOutlinePlus size={24} className="text-secondary-content" />}
          to="/new-class"
        />
        <BottomNavbar />
      </div>
    </>
  );
};

export default HomePage;
