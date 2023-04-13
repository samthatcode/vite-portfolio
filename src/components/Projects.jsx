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
        <p className=" text-center font-medium text-xl text-stone-700 py-8">
          I have worked on several projects that showcase my skills in different
          areas of expertise. These projects include:
        </p>
        <div className=" grid sm:grid-cols-2 gap-12">
          <a
            href="http://pvc-pipe.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={img1} title="PVC-PIPE" />
          </a>
          <a
            href="http://samthatcode-weather-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={img4} title="Weather App" />
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer">
            <ProjectItem img={img3} title="Third App" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <ProjectItem img={img4} title="Sketch App" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
