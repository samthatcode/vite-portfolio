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
          <a href="http://twitter.com/samthatcode/">
            <FaTwitter
              className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
              size={25}
            />
          </a>
          <a href="http://github.com/samthatcode/">
            <FaGithub
              className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
              size={25}
            />
          </a>
          <a href="https://web.facebook.com/samuel.osho.5245/">
            <FaFacebookF
              className="cursor-pointer hover:text-[#001b99] hover:scale-110 ease-in duration-200"
              size={25}
            />
          </a>
          <a href="http://www.linkedin.com/in/samuel-osho-574808189/">
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
        <p className="font-sans font-semibold text-xl text-center pt-10 text-[#001b52]">
          Made with &hearts; by samthatcode &#169; All right reserved. 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
