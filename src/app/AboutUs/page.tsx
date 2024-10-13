import NavBar from "@/app/components/Navbar";
import HeroAbout from "../components/HeroAbout";
import AboutSection from "@/app/components/AboutSection";
import AllTimelines from "../components/AllTimelines";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroAbout />
        <AboutSection />
        <AllTimelines />
        <Footer />
      </div>
    </>
  );
};

export default Home;
