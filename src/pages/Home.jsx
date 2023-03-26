import React from "react";
import FeatureProduct from "../components/FeatureProduct";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";

const Home = () => {
  const data = {
    name: "China Shop",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Footer />

      {/* <Slider/> */}
    </>
  );
};

export default Home;
