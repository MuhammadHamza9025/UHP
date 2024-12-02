import React from "react";
import i1 from "../../Assests/Frame12726284662.jpeg";

const CommonComponent = ({
  ranking,
  seats,
  years,
  title,
  linkText,
  location,
  imgUrl,
  type,
  index,
}) => {
  return (
    <>
      <div className="relative">
        <img src={i1} alt="Description" className="object-cover w-full h-48" />

        <div className="absolute top-0 right-0 bg-[#22C55E] text-white text-sm px-3 py-1">
          {ranking}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-2 text-sm text-gray-500">
          <span>{years || 120}</span>
          <span>{seats || 123}</span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-black">
          {title.length > 18 ? `${title.slice(0, 18)}...` : title}
        </h3>
        <p className="mb-2 text-sm text-gray-500">{location || "jjkj"}</p>
        <p className="mb-4 text-sm text-gray-500">{type || "lknk"}</p>
        <p href="" className="text-sm font-semibold text-[#22C55E]">
          {linkText} <span className="text-[#22C55E]">→</span>
        </p>
      </div>
    </>
  );
};

export default CommonComponent;
