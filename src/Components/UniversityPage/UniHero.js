import React from "react";
import "./UniHero.css";
import image1 from "../../a844208f45c9c8908107df400bb79929.jpeg"; // This can be the new image path
import uet from "../../Assests/uet.jpeg";
import emersion_uni from "../../Assests/emerson_uni.jpeg"; // The image you want to use for the animation

const UniHero = ({ university }) => {
  return (
    <div
      className="relative h-screen text-white bg-center bg-cover background"
      style={{ backgroundImage: `url(${university.backgroundImage})` }}
    >
      <div className="inset-0 z-0 flex items-center justify-between h-full p-10 bg-opacity-50 tone-background">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-5xl font-bold text-yellow-500">
            {university.title}
          </h1>
          <h2 className="mb-2 text-2xl font-semibold">{university.location}</h2>
          <p className="pr-24 mb-4 text-lg">{university.description}</p>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              {/* SVG Icon */}
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9862 2.36734C15.5256 2.37142 12.2079 3.74795 9.76091 6.19498C7.31388 8.642 5.93735 11.9597 5.93327 15.4203C5.92913 18.2483 6.85289 20.9996 8.56285 23.2521C8.56285 23.2521 8.91884 23.7208 8.97699 23.7884L18.9862 35.5931L29.0002 23.7825C29.0525 23.7196 29.4096 23.2521 29.4096 23.2521L29.4108 23.2485C31.1199 20.997 32.0433 18.247 32.0392 15.4203C32.0351 11.9597 30.6586 8.642 28.2116 6.19498C25.7646 3.74795 22.4469 2.37142 18.9862 2.36734ZM18.9862 20.1668C18.0475 20.1668 17.1298 19.8885 16.3492 19.3669C15.5686 18.8454 14.9603 18.104 14.601 17.2367C14.2418 16.3694 14.1478 15.415 14.3309 14.4943C14.5141 13.5736 14.9661 12.7278 15.6299 12.064C16.2937 11.4002 17.1395 10.9481 18.0602 10.765C18.981 10.5818 19.9353 10.6758 20.8027 11.0351C21.67 11.3943 22.4113 12.0027 22.9328 12.7833C23.4544 13.5638 23.7328 14.4815 23.7328 15.4203C23.7312 16.6787 23.2306 17.8851 22.3408 18.7749C21.451 19.6647 20.2446 20.1653 18.9862 20.1668Z"
                  fill="teal"
                />
              </svg>

              <span>{university.address}</span>
            </div>
            <div className="flex items-center">
              {/* SVG Icon */}
              <svg
                width="38"
                height="39"
                viewBox="0 0 38 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6237 3.03293H27.4037V16.2052C27.4037 16.8485 27.2638 17.4218 26.9842 17.9252C26.7045 18.4286 26.313 18.8341 25.8096 19.1417L19.8527 22.6655L21.0273 26.5249H27.4037L22.2019 30.2165L24.2155 36.5929L19.0137 32.6496L13.8119 36.5929L15.8255 30.2165L10.6237 26.5249H17.0001L18.1747 22.6655L12.2178 19.1417C11.7144 18.8341 11.3228 18.4286 11.0432 17.9252C10.7635 17.4218 10.6237 16.8485 10.6237 16.2052V3.03293ZM13.9797 6.38893V16.2052L17.3357 18.2188V6.38893H13.9797ZM24.0477 6.38893H20.6917V18.2188L24.0477 16.2052V6.38893Z"
                  fill="teal"
                />
              </svg>

              <span>{university.ranking}</span>
            </div>
            <div className="flex items-center">
              <span className="px-3 py-1 text-[2rem] font-bold bg-yellow-500 rounded-md text-teal-500">
                {university.type}
              </span>
            </div>
          </div>
        </div>

        {/* Image Container with Animation */}
        <div className="flex items-center justify-center h-full md:w-1/2">
          <div className="image-container">
            <img
              src={emersion_uni}
              alt="University Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniHero;
