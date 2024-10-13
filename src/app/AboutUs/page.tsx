import NavBar from "@/app/components/Navbar";
import HeroAbout from "../components/HeroAbout";
import AboutSection from "@/app/components/AboutSection";
// import TimelineNine from "@/app/components/TimelineNine";
// import TimelineTen from "@/app/components/TimelineTen";
import AllTimelines from "../components/AllTimelines";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroAbout />
        <AboutSection />
        {/* <TimelineNine />
        <TimelineTen /> */}
        <AllTimelines />
        <Footer />
      </div>
    </>
  );
};

export default Home;
