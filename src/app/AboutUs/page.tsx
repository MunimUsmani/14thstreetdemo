import NavBar from "@/app/components/Navbar";
import HeroAbout from "../components/HeroAbout";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroAbout />
        <Footer />
      </div>
    </>
  );
};

export default Home;
