import React from "react";
import TallBuildingPic from "../assets/images/TallBuildingPic.jpg";
import profile from "../assets/images/profile.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        src={TallBuildingPic}
        alt="Sam"
        className="w-full h-screen object-cover object-left scale-x-[-1]"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center lg:text-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">
            I'm Samuel
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-900 ">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types '2 secs'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="">
            <img
              src={profile}
              alt=""
              className="w-56 lg:w-72  h-56-t mt-5 lg: rounded-full border-2 border-sky-800  object-contain "
            />
          </div>
          <div className="text-[#001b52] flex justify-between pt-6 max-w-[300px] w-full ">
            <a
              href="http://www.twitter.com/samthatcode/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter
                className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
                size={25}
              />
            </a>
            <a
              href="http://www.github.com/samthatcode/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
                size={25}
              />
            </a>
            <a
              href="https://www.facebook.com/samuel.osho.5245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF
                className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
                size={25}
              />
            </a>
            <a
              href="http://www.linkedin.com/in/samuel-osho-574808189/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
                size={25}
              />
            </a>
            <a
              href="https://wa.me/2347063305295"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
                size={25}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
