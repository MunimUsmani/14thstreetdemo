import NavBar from "@/app/components/Navbar";
import HeroAbout from "../components/HeroAbout";
import AboutSection from "@/app/components/AboutSection";
import TimelineSection from "@/app/components/TimelineSection";
import Timelines from "@/app/components/Timelines";
import TimelineTwo from "@/app/components/TimelineTwo";
import TimelineThree from "@/app/components/TimelineThree";
import TimelineFour from "@/app/components/TimelineFour";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroAbout />
        <AboutSection />
        <TimelineSection />
        <Timelines />
        <TimelineTwo />
        <TimelineThree />
        <TimelineFour />
        <Footer />
      </div>
    </>
  );
};

export default Home;
