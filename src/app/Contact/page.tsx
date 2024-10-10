import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SearchBar from "@/app/components/SearchBar";
import Location from "@/app/components/Location";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <SearchBar />
        <Location />
        <Footer />
      </div>
    </>
  );
};

export default Home;
