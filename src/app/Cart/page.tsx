import NavBar from "@/app/components/Navbar";
import HeroCart from "../components/HeroCart";
import OrderSummary from "@/app/components/OrderSummary";
import CheckoutForm from "../components/CheckoutForm";
import Footer from "@/app/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroCart />
        <OrderSummary />
        <CheckoutForm />
        <Footer />
      </div>
    </>
  );
};

export default Home;
