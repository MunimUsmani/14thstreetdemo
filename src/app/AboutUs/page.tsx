import NavBar from "@/app/components/Navbar";
import HeroAbout from "../components/HeroAbout";
import AboutSection from "@/app/components/AboutSection";
// import TimelineSection from "@/app/components/TimelineSection";
// import Timelines from "@/app/components/Timelines";
// import TimelineTwo from "@/app/components/TimelineTwo";
// import TimelineThree from "@/app/components/TimelineThree";
// import TimelineFour from "@/app/components/TimelineFour";
// import TimelineFive from "@/app/components/TimelineFive";
// import TimelineSix from "@/app/components/TimelineSix";
// import TimelineSeven from "@/app/components/TimelineSeven";
// import TimelineEight from "@/app/components/TimelineEight";
// import TimelineNine from "@/app/components/TimelineNine";
// import TimelineTen from "@/app/components/TimelineTen";
// import TimelineEleven from "@/app/components/TimelineEleven";
// import TimelineTwelve from "@/app/components/TimelineTwelve";
// import TimelineThirteen from "@/app/components/TimelineThirteen";
import AllTimelines from "../components/AllTimelines";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroAbout />
        <AboutSection />
        {/* <TimelineSection />
        <Timelines />
        <TimelineTwo />
        <TimelineThree />
        <TimelineFour />
        <TimelineFive />
        <TimelineSix />
        <TimelineSeven />
        <TimelineEight />
        <TimelineNine />
        <TimelineTen />
        <TimelineEleven />
        <TimelineTwelve />
        <TimelineThirteen /> */}
        <AllTimelines />
        <Footer />
      </div>
    </>
  );
};

export default Home;
