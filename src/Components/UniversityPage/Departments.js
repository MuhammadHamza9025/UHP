import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import uet from "../../Assests/uet.jpeg";

const Departments = () => {
  const departments = [
    {
      name: "Marketing",
      imageUrl: uet, // Replace with your image
    },
    {
      name: "Finance",
      imageUrl: uet, // Replace with your image
    },
    {
      name: "Human Resources",
      imageUrl: uet, // Replace with your image
    },
    {
      name: "Research & Development",
      imageUrl: uet, // Replace with your image
    },
    {
      name: "Operations",
      imageUrl: uet, // Replace with your image
    },
  ];

  // Custom next and previous arrow components
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute z-10 text-gray-600 transform -translate-y-1/2 cursor-pointer top-1/2 right-4"
      onClick={onClick}
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <FaChevronRight size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute z-10 text-gray-600 transform -translate-y-1/2 cursor-pointer top-1/2 left-4"
      onClick={onClick}
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
      }}
    >
      <FaChevronLeft size={24} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative px-12 py-10 bg-gray-100">
      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <div className="h-[3px] w-12 bg-teal-500 mr-4" />
        <h2 className="text-2xl font-semibold text-gray-800">Departments</h2>
        <div className="h-[3px] w-12 bg-teal-500 ml-4" />
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {departments.map((department, index) => (
          <div key={index} className="px-2">
            <div className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                src={department.imageUrl}
                alt={department.name}
                className="w-full h-[150px] object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-semibold text-center text-gray-700">
                  {department.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Departments;
