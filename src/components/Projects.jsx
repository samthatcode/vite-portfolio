import React from "react";
import ProjectItem from "./ProjectItem";
import pvcpipe from "../assets/images/pvc-pipe.png";
import weatherapp from "../assets/images/weather-app.png";
import cryptoapp from "../assets/images/crypto-app.png";
import netflixapp from "../assets/images/netflix-app.png";
import aiprompt from "../assets/images/ai-prompt.png";

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
            <ProjectItem img={pvcpipe} title="PVC-PIPE" framework="react" />
          </a>
          <a
            href="http://samthatcode-weather-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={weatherapp} title="Weather App" framework="react" />
          </a>
          <a
            href="https://cryptoworldgecko-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={cryptoapp} title="Crypto API App" framework="react" />
          </a>
          <a
            href="https://netflix-webapp-clone.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={netflixapp} title="Netflix Clone App" framework="react" />
          </a>
          <a
            href="https://ai-prompt-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={aiprompt} title="Ai Prompt App" framework="nextjs" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
