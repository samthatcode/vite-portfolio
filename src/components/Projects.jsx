import React from "react";
import ProjectItem from "./ProjectItem";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";

const Projects = () => {
  return (
    <div className="py-10 bg-zinc-200">
      <div
        id="projects"
        className=" bg-indigo-100  shadow-xl shadow-gray-400 rounded-xl max-w-[1040px] m-auto md:pl-20 p-4 py-16 "
      >
        <h1 className="  text-4xl font-bold text-center text-[#001b52]">
          Projects
        </h1>
        <p className=" text-center py-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className=" grid sm:grid-cols-2 gap-12">
          <ProjectItem img={img1} title="First App" />
          <ProjectItem img={img2} title="Second App" />
          <ProjectItem img={img3} title="Third App" />
          <ProjectItem img={img4} title="Sketch App" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
