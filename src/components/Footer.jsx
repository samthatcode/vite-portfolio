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
        <div className=" flex  justify-evenly pt-6 text-[#001b52] w-full ">
          <a href="http://">
            <FaTwitter className="cursor-pointer" size={25} />
          </a>
          <a href="http://">
            <FaGithub className="cursor-pointer" size={25} />
          </a>
          <a href="http://">
            <FaFacebookF className="cursor-pointer" size={25} />
          </a>
          <a href="http://">
            <FaLinkedinIn className="cursor-pointer" size={25} />
          </a>
          <a href="http://">
            <FaWhatsapp className="cursor-pointer" size={25} />
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
