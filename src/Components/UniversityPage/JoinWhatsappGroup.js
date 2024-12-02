import React from "react";
import image from "../../Assests/Frame1272628527.jpeg";
const JoinWhatsAppGroup = () => {
  return (
    <section
      className="px-12 py-10 text-white bg-center bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="mb-2 text-4xl font-bold">Join WhatsApp Group</h2>
        <div className="w-40 h-[2px] bg-teal-500" />
      </div>

      {/* Description */}
      <p className="max-w-md mb-6">
        Connect with like-minded individuals, share insights, and stay updated
        by joining our WhatsApp group. Click the button below to join us now!
      </p>

      {/* Join Now Button */}
      <button className="px-6 py-2 font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600">
        Join Now
      </button>
    </section>
  );
};

export default JoinWhatsAppGroup;
