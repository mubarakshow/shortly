import Navbar from "../../components/Navbar/Navbar";
import Layout from "../../components/Layout"
import HeroSection from "./sections/HeroSection/HeroSection";
import ShortenerSection from "./sections/ShortnerSection/ShortenerSection";
import { useEffect, useRef } from "react";
import { link } from "fs";

// export const getStaticProps = async () => {
//   const linkHistory = await JSON.parse(localStorage.getItem('shortLinks') || "{}");
//   console.log('LH', linkHistory)
//   return {
//     props: {
//       linkHistory
//     }
//   }
// }

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <ShortenerSection />
    </Layout>
  );
};

export default HomePage;
