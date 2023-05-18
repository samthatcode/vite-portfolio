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

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const [showResume, setShowResume] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleResumeClick = () => {
    setShowResume(true);
  };

  return (
    <div>
      {/* Nav Toggle */}
      {nav ? (
        <AiOutlineClose
          size={30}
          onClick={() => setNav(!nav)}
          className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer ease-in duration-200 font-semibold fill-[#001b5e]"
        />
      ) : (
        <AiOutlineBars
          size={30}
          onClick={() => setNav(!nav)}
          className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer ease-in duration-200 font-semibold fill-[#001b5e]"
        />
      )}

      {nav ? (
        <div
          className={`w-full fixed h-screen bg-white flex flex-col justify-center items-center z-20 transform transition-transform duration-300 ease-in-out ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
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
            <span className="pl-4">Resume</span>
          </a>
        </div>
      ) : null}

      {/* Resume iframe */}
      {showResume && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-800 bg-opacity-70 flex justify-center items-center">
          <div className="relative w-full h-full">
            <div
              className="absolute top-4 left-4 z-50 text-red-700 cursor-pointer"
              onClick={() => setShowResume(false)}
            >
              <AiOutlineClose size={30} />
            </div>
            <iframe
              src="https://docs.google.com/viewer?url=https://drive.google.com/uc?id=1h_9ZYUOoGB8qzuNJ2nXE7ZEmLTxzLO0Z&embedded=true"
              width="100%"
              height="100%"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default SideNav;
