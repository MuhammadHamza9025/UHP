import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Fantastic customer service. I shifted from a traditional bank to Sable, and Sable’s customer service helped me answer all the questions that I needed to switch.",
      name: "K Oiwake",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s", // Replace with actual image URL
    },
    {
      id: 2,
      quote:
        "The team at Sable made switching seamless. They provided great support throughout the process.",
      name: "A Johnson",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjQQb9TUUMVqF2CAruUGRh3vK2CukSsrYx1A&s", // Replace with actual image URL
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      <div className="flex items-center justify-center my-10">
        <span className="w-[100px] border-2 border-teal-500 mx-2  rounded-full"></span>
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <span className="w-[100px] border-2 border-teal-500 mx-2  rounded-full"></span>
      </div>
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center justify-between p-6 bg-green-100 rounded-lg shadow-lg md:flex-row"
              >
                {/* Quote Section */}
                <div className=" max-w-[300px]  text-center md:text-left">
                  <p className="mb-4 text-4xl font-bold text-black">“</p>
                  <p className="mb-4 text-lg text-gray-700">
                    {testimonial.quote}
                  </p>
                  <p className="mt-4 font-bold">— {testimonial.name}</p>
                </div>

                {/* Image Section */}
                <div className="mt-6 md:w-1/4 md:mt-0">
                  <div className="relative w-24 h-24 mx-auto overflow-hidden rounded-full md:mx-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 border-2 border-teal-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
