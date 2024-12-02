import React from "react";
import Hero from "../Components/Home/Hero";
import SecondSection from "../Components/Home/SecondSection";
import Universities from "../Components/Home/Universities";
import Programs from "../Components/Home/Programs";
import Testimonials from "../Components/Home/Testimonials";
import OpenAdmission from "../Components/Home/OpenAdmission";
import TopCategories from "../Components/Home/TopCategories";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <SecondSection></SecondSection>
      <Universities></Universities>
      <Programs></Programs>
      <OpenAdmission></OpenAdmission>
      <Testimonials></Testimonials>
      <TopCategories></TopCategories>
    </>
  );
};

export default HomePage;
