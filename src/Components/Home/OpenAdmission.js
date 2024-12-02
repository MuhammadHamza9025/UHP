import React, { useState } from "react";
import CommonComponent from "./CommonComponent";
import image1 from "../../Assests/Frame1272628466.jpeg";
import image2 from "../../Assests/Frame12726284661.jpeg";
import image3 from "../../Assests/Frame12726284662.jpeg";
import image4 from "../../Assests/Frame12726284664.jpeg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
const OpenAdmission = () => {
  const [open, setopen] = useState(3);
  const collegesData = [
    {
      imgUrl: image1,
      ranking: "No.1 Ranking",
      years: "110+ Years",
      seats: "1200+ Seats",
      title: "King Edward Medical College",
      location: "G-10 Islamabad, Punjab",
      type: "Public",
      linkText: "Learn More",
      category: "Engineering",
    },
    {
      imgUrl: image2,
      ranking: "No.1 Ranking",
      years: "110+ Years",
      seats: "1200+ Seats",
      title: "Allama Iqbal Medical College",
      location: "Lahore, Punjab",
      type: "Public",
      linkText: "Learn More",
      category: "Medical",
    },
    {
      imgUrl: image3,
      ranking: "Top 10",
      years: "75+ Years",
      seats: "800+ Seats",
      title: "Punjab Law College",
      location: "F-8 Islamabad, Punjab",
      type: "Private",
      linkText: "Learn More",
      category: "Law",
    },
    {
      imgUrl: image4,
      ranking: "No.1 Ranking",
      years: "100+ Years",
      seats: "1500+ Seats",
      title: "Fatima Jinnah Medical College",
      location: "Lahore, Punjab",
      type: "Public",
      linkText: "Learn More",
      category: "Medical",
    },
    {
      imgUrl: image4,
      ranking: "No.1 Ranking",
      years: "100+ Years",
      seats: "1500+ Seats",
      title: "Fatima Jinnah Medical College",
      location: "Lahore, Punjab",
      type: "Public",
      linkText: "Learn More",
      category: "Medical",
    },
    {
      imgUrl: image2,
      ranking: "Top 5",
      years: "60+ Years",
      seats: "900+ Seats",
      title: "National College of Arts",
      location: "Lahore, Punjab",
      type: "Public",
      linkText: "Learn More",
      category: "Art and Design",
    },
    {
      imgUrl: image3,
      ranking: "Top 20",
      years: "50+ Years",
      seats: "1000+ Seats",
      title: "University of Agriculture",
      location: "Faisalabad, Punjab",
      type: "Public",
      linkText: "Learn More",
      category: "Bs Agriculture",
    },
    {
      imgUrl: image1,
      ranking: "Top 3",
      years: "80+ Years",
      seats: "1100+ Seats",
      title: "University of Social Sciences",
      location: "Karachi, Sindh",
      type: "Private",
      linkText: "Learn More",
      category: "Social Science",
    },
    {
      imgUrl: image4,
      ranking: "Top 7",
      years: "90+ Years",
      seats: "1300+ Seats",
      title: "Institute of Business Administration",
      location: "Karachi, Sindh",
      type: "Public",
      linkText: "Learn More",
      category: "Business",
    },
    {
      imgUrl: image2,
      ranking: "Top 10",
      years: "65+ Years",
      seats: "700+ Seats",
      title: "National University of Humanities",
      location: "Islamabad, Punjab",
      type: "Private",
      linkText: "Learn More",
      category: "Humanities",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center my-10">
        <span className="w-[100px] border-2 border-teal-500 mx-2  rounded-full"></span>
        <h2 className="text-3xl font-semibold">Latest Admissions</h2>
        <span className="w-[100px] border-2 border-teal-500 mx-2  rounded-full"></span>
      </div>
      <div className=" sm:max-w-[70%] m-auto">
        <div className="flex flex-col px-4 mx-auto my-8 ">
          {collegesData.slice(0, open).map((e, index) => (
            <div key={index} className="p-2 ">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden !flex gap-10  ">
                <CommonComponent
                  category={e.category}
                  imgUrl={e.imgUrl}
                  linkText={e.linkText}
                  location={e.location}
                  type={e.type}
                  title={e.title}
                  seats={e.seats}
                  years={e.years}
                  index={index}
                  ranking={e.ranking}
                ></CommonComponent>
              </div>
            </div>
          ))}
          {collegesData.length > open ? (
            <p
              onClick={() => setopen(open + 3)}
              className="text-xs text-center text-gray-600 cursor-pointer"
            >
              Show more{" "}
              <KeyboardDoubleArrowDownIcon></KeyboardDoubleArrowDownIcon>
            </p>
          ) : (
            <p
              onClick={() => setopen(3)}
              className="text-xs text-center text-gray-600 cursor-pointer"
            >
              Show less <KeyboardDoubleArrowUpIcon></KeyboardDoubleArrowUpIcon>{" "}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default OpenAdmission;
