import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout"
import HeroSection from "./sections/HeroSection/HeroSection";
import ShortenerSection from "./sections/ShortnerSection/ShortenerSection";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ShortenerSection />
    </Layout>
  );
};

export default HomePage;
