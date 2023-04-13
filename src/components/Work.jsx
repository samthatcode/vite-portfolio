import React from "react";
import WorkItem from "./WorkItem";

const data = [
  // {
  //   year: 2020,
  //   title: "Frontend Developer",
  //   duration: "3 Years",
  //   description: "",
  //   details:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  // {
  //   year: 2017,
  //   title: "Frontend Developer",
  //   duration: "3 Years",
  //   description: "",
  //   details:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  // },
  {
    year: "Jan 17th - April 12th, 2023",
    title: "Frontend Developer",
    duration: "3 Months ",
    description: "Internship at Enoverlab",
    details:
      " I worked on this project with a talented team of designers, product managers, and UI/UX designers! Our project is a fully integrated Paystack payment system built with React, Tailwind CSS, Paystack, APIs, and Firebase. We wanted to solve the problem of Permanent Voter's Card (PVC) request and delivery, secure online payments for Logistics and provide users with a seamless and secure way to get their card delivered in conjuction with the Independence National Electoral Commission (INEC).",
  },
  {
    year: "2020 - Present",
    title: "Frontend Developer",
    duration: "3 Years",
    description: "Freelancer",
    details:
      "As a frontend developer, I specialize in creating visually appealing and user-friendly web applications. I have over 2 years of experience in the field, and  I have developed a strong understanding of HTML, CSS, and JavaScript, and I am always looking to expand my skillset. I have experience working on a variety of projects, from small landing pages to large-scale web applications. I enjoy working on projects that challenge me and allow me to learn new skills.",
  },
];

const Work = () => {
  return (
    <div className=" py-10 bg-gray-100">
      <div
        id="work"
        className=" bg-gradient-to-r from  via-purple-300 to-violet-100 max-w-[1040px] m-auto md:pl-20 p-4 py-16 bg-gray-200 shadow-xl shadow-gray-400 rounded-xl"
      >
        <h1 className="text-4xl font-bold text-center mb-5 text-[#001b5e]">Work</h1>
        {data.map((item, idx) => (
          <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            description={item.description}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
