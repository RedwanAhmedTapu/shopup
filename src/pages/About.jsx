import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import { useProductContext } from "../context/ProductContext";

const About = () => {
  // const myName = useContext(AppContext);
  const { myName } = useProductContext();

  const data = {
    name: "Shop Hunt",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
      <Services />
      <Trusted />
      <Footer />
    </>
  );
};

export default About;
