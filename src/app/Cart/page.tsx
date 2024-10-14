import NavBar from "@/app/components/Navbar";
import HeroCart from "../components/HeroCart";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroCart />
        <Footer />
      </div>
    </>
  );
};

export default Home;
