import NavBar from "@/app/components/Navbar";
import Slider from "./components/Slider";
import Cards from "@/app/components/Cards";
import TextComponent from "./components/textComponent";
import DealTimer from "@/app/components/DealTimer";
import DownloadApp from "./components/Download";
import PopularDeals from "./components/PopularDeals";
import Footer from "./components/Footer";
import Head from "next/head";
import Hero from "./components/Hero";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <NavBar />
        <Hero />
        <Slider />
        <Cards />
        <TextComponent />
        <DealTimer />
        <DownloadApp />
        <PopularDeals />
        <Footer />
      </div>
    </>
  );
};

export default Home;
