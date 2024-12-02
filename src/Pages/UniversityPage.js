import React from "react";
import { useParams } from "react-router-dom";
import UniHero from "../Components/UniversityPage/UniHero";
import { collegesData } from "../Components/Home/Universities"; // Adjust the path accordingly
import HowToApply from "../Components/UniversityPage/HowToApply";
import Programs from "../Components/Home/Programs";
import JoinWhatsAppGroup from "../Components/UniversityPage/JoinWhatsappGroup";
import Departments from "../Components/UniversityPage/Departments";

const UniversityPage = () => {
  const { id } = useParams(); // Get the university ID from the route parameters

  // Fetch university data based on the ID
  // This could be an API call or local data lookup
  const university = collegesData.find((college) => college.id === id);

  if (!university) {
    return <div>University not found</div>; // Handle case where university is not found
  }

  return (
    <>
      {/* Pass university data as props to UniHero */}
      <UniHero university={university} />
      <HowToApply />
      <Programs />
      <Departments />
      <JoinWhatsAppGroup />
    </>
  );
};

export default UniversityPage;
