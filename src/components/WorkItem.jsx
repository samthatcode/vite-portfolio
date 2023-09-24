import React, { useState } from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const WorkItem = ({ year, title, duration, description, details }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleDetails = () => {
    setShowMore(!showMore);
  };

  // Calculate the current year dynamically
  const currentYear = getCurrentYear();

  // Replace "Present" with the current year if necessary
  year = year.replace("Present", currentYear);

  // Calculate the duration dynamically
  const yearParts = year.split(" - ");
  const startYear = parseInt(yearParts[0], 10);
  const endYear = parseInt(yearParts[1], 10);
  const calculatedDuration = endYear === currentYear ? `${currentYear - startYear} Years` : duration;

  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-500">
          {calculatedDuration}
          </span>
        </p>
        <span className="my-1 text-lg font-bold leading-none text-stone-500">
          {description}
        </span>
        <p className="my-2 text-justify md:text-lg text-sm font-normal text-stone-600">
          {showMore ? details : details.slice(0, 150)} {/* Show the first 150 characters */}
          {!showMore && details.length > 150 && (
            <button
              onClick={toggleDetails}
              className="text-[#001b5e] hover:underline cursor-pointer"
            >
              ... Show More
            </button>
          )}
          {showMore && (
            <button
              onClick={toggleDetails}
              className="text-[#001b5e] hover:underline cursor-pointer"
            >
                 ... Show Less
            </button>
          )}
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
