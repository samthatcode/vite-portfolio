import React, { useState } from "react";
import {
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { FaBars, FaCode } from "react-icons/fa";

const SideNav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleResumeClick = () => {
    window.open(
      "https://docs.google.com/viewer?url=https://drive.google.com/uc?id=1e6yZtYrfa4W07eydOkC6B_ckKVmYJkGZ&embedded=true",
      "_blank"
    );
  };

  return (
    <div>
      {/* Nav Toggle */}
      <div className="flex justify-between items-center bg-[#e5e7ee57] fixed top-0 left-0 w-full h-16 px-2 z-[99]">
        <div className="flex items-center">
          <a href="/">
            <h1 className="text-[#001b52e4] text-xl font-bold flex items-center justify-center ">
              {/* <FaCode size={25} /> */}
              versionControlDev{" "}
              <span className="text-red-700 font-bold ">( )</span>
            </h1>
          </a>

          {/* <a
            href="https://drive.google.com/uc?id=1e6yZtYrfa4W07eydOkC6B_ckKVmYJkGZ&export=download"
            download="resume.pdf"
            className="hover:bg-[#001b52e4] font-semibold bg-[#001b52] text-white rounded px-4 py-2 md:hidden ml-[80px]"
          >
            Download Resume
          </a> */}
        </div>
        {nav ? (
          <div>
            <AiOutlineClose
              size={40}
              onClick={() => setNav(!nav)}
              className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer ease-in duration-200 font-semibold text-[#520400]"
            />
          </div>
        ) : (
          <div>
            <AiOutlineBars
              size={40}
              onClick={() => setNav(!nav)}
              className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer ease-in duration-200 font-medium text-[#001b52]"
            />
          </div>
        )}
      </div>

      {nav ? (
        <div
          className={`w-full fixed h-screen bg-white flex flex-col justify-center items-center z-20 transform transition-transform duration-300 ease-in-out`}
        >
          {/* Mobile nav items */}
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
          <a
            onClick={handleResumeClick}
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">View Resume</span>
          </a>
        </div>
      ) : null}

      {/* Desktop nav items */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <div className="flex hover:text-blue-500">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={30} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#work"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <GrProjects size={30} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineProject size={30} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail size={30} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              onClick={handleResumeClick}
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsPerson size={30} />
            </a>
          </div>
        </div>
      </div>
      {/* Download Resume Button */}
      <div className="fixed top-0 right-0 h-16 px-4 flex items-center z-[99]">
        <button>
          <a
            href="https://drive.google.com/uc?id=1e6yZtYrfa4W07eydOkC6B_ckKVmYJkGZ&export=download"
            download="resume.pdf"
            className="px-4 py-2 hover:bg-[#001b52e4] font-semibold bg-[#001b52] text-white rounded hidden md:block focus:outline-none"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
