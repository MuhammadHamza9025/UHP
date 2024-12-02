import React, { useState, useEffect } from "react";
import image from "../../Assests/Frame1272628527.jpeg";

const Programs = () => {
  const array = [
    {
      number: 1500,
      name: "Universities",
    },
    {
      number: 27000,
      name: "Courses",
    },
    {
      number: 150,
      name: "Programs",
    },
  ];

  const [counters, setCounters] = useState(
    array.map((e) => ({ number: 0, name: e.name }))
  );

  useEffect(() => {
    array.forEach((item, index) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < item.number) {
          count += Math.ceil(item.number / 100);
          setCounters((prevCounters) =>
            prevCounters.map((counter, i) =>
              i === index
                ? { number: Math.min(count, item.number), name: item.name }
                : counter
            )
          );
        } else {
          clearInterval(interval);
        }
      }, 30);
    });
  }, []);

  return (
    <div
      className="p-10 px-4 my-10 sm:px-6 lg:px-8 "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-wrap justify-center gap-6">
        {counters.map((e, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 p-4 text-center bg-teal-500 rounded-lg shadow-lg sm:p-5"
          >
            <span className="text-3xl font-semibold text-white sm:text-4xl">
              {e.number}+
            </span>
            <h3 className="my-2 text-xl font-bold sm:text-2xl">{e.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
