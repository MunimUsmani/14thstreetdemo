import NavBar from "@/app/components/Navbar";
import HeroDetail from "../components/HeroDetail";
import ProductDetail from "@/app/components/ProductDetail";
import RelatedProducts from "@/app/components/RelatedProducts";
import FrequentlyBoughtTogether from "../components/FrequentlyBought";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroDetail />
        <ProductDetail />
        <RelatedProducts />
        <FrequentlyBoughtTogether />
        <Footer />
      </div>
    </>
  );
};

export default Home;
