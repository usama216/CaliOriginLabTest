import React from "react";
import Page from "../../components/page";
import HeroSection from "./components/HeroSection";
import Hero from "./HeroSection/Hero";
import Category from "./Cetegory/Category";
import Video from "./Video/Video";

const Landing = () => {
  return (
    <Page title="Cali Origin">


      {/* <HeroSection/> */}
      <Hero/>
      <Category/>
      <Video/>


    </Page>
  );
};

export default Landing;
