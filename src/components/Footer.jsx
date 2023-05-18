import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-xl py-5">
      <div className=" bg-slate-200 max-w-[1040px] shadow-xl shadow-gray-400  m-auto p-4 rounded-xl py-16">
        <div className=" flex  justify-evenly pt-6 text-[#001b52] w-full">
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
          <a href="https://wa.me/2347063305295">
            <FaWhatsapp
              className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
              size={25}
            />
          </a>
        </div>
        <p className="font-sans font-semibold md:text-xl text-sm text-center pt-10 text-[#001b52]">
          Made with &hearts; by samthatcode
        </p>
        <p className="font-sans font-semibold md:text-xl text-sm text-center  text-[#001b52]">
          &#169; All right reserved. 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
