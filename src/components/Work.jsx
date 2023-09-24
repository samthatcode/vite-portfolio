import React from "react";
import WorkItem from "./WorkItem";

const data = [ 
  {
    year: "Jan - April, 2023",
    title: "Frontend Developer",
    duration: "4 Months ",
    description: "Internship at Enoverlab",
    details:
      " I worked on this project with a talented team of designers, product managers, and UI/UX designers! Our project is a fully integrated Paystack payment system built with React, Tailwind CSS, Paystack, APIs, and Firebase. We wanted to solve the problem of Permanent Voter's Card (PVC) request and delivery, secure online payments for Logistics and provide users with a seamless and secure way to get their card delivered in conjuction with the Independence National Electoral Commission (INEC).",
  },
  {
    year: "2020 - Present",
    title: "Software Engineer",
    duration: "3 Years",
    description: "Freelancer",
    details: `
        As a frontend developer with over 3 years of experience, I specialize in creating visually appealing and user-friendly web applications using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. In addition to my professional work, I'm passionate about contributing to open-source projects within the MERN stack community. I believe in the power of collaboration and open-source development to drive innovation and solve real-world problems.

        My dedication to open-source extends beyond mere coding. I actively engage in discussions, offer assistance to fellow developers, and have made meaningful contributions to several MERN stack projects. This commitment has allowed me to stay at the forefront of emerging technologies and best practices, enriching my skillset and knowledge base.

        With a background spanning a wide range of projects, from small landing pages to large-scale web applications, I've honed my ability to adapt and deliver results in diverse contexts. I relish the challenges that come with open-source collaboration, as they push me to learn new skills and explore innovative solutions, ultimately contributing to the growth of the MERN stack ecosystem while enhancing my own professional development.
    `
}

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
