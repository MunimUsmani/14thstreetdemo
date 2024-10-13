import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroContact from "../components/HeroAbout";
import ContactForm from "../components/ContactForm";
import NewsletterSubscription from "../components/Newsletter";

const Home: React.FC = () => {
  return (
    <>
      <div>
        <NavBar />
        <HeroContact />
        <ContactForm />
        <NewsletterSubscription />
        <Footer />
      </div>
    </>
  );
};

export default Home;
