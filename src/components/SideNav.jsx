import React, { useState } from "react";
import {
  AiOutlineBars,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  // AiOutlineClose
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineBars
        size={30}
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer ease-in duration-200 font-semibold fill-[#001b5e] hover:scale-110 "
      />
      {nav ? (
        <div className="w-full fixed h-screen bg-white flex flex-col justify-center items-center z-20 ">
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
            href="#main"
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
        // <AiOutlineClose  className="fixed top-4 right-4 z-[99] md:hidden cursor-pointer ease-in duration-200 font-semibold fill-[#001b5e] " />
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        {/* <div class="hover:text-blue-500" title="My Icon">
            <i class="fas fa-star"></i>
          </div>
          */}
        <div className="flex flex-col">
          <div className="flex hover:text-blue-500">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineHome size={20} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#work"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <GrProjects size={20} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#projects"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineProject size={20} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#main"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsPerson size={20} />
            </a>
          </div>
          <div className="flex hover:text-blue-500">
            <a
              href="#contact"
              className="rounded-full shadow-lg bg-gray-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
