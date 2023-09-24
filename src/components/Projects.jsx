import React from "react";
import ProjectItem from "./ProjectItem";
import pvcPipe from "../assets/images/pvc-pipe.png";
import weatherApp from "../assets/images/weather-app.png";
import cryptoApp from "../assets/images/crypto-app.png";
import netflixApp from "../assets/images/netflix-app.png";
import aiPrompt from "../assets/images/ai-prompt.png";
import todoApp from "../assets/images/todo-app.png";
import familyGuy from "../assets/images/familyGuy.png";
import getLinked from "../assets/images/get-linked.png";
import sureFinders from "../assets/images/sure-finders.png";

const Projects = () => {
  return (
    <div className="py-10 bg-zinc-200">
      <div
        id="projects"
        className="bg-indigo-100  shadow-xl shadow-gray-400 rounded-xl max-w-[1040px] m-auto md:pl-20 p-4 py-16 "
      >
        <h1 className="text-4xl font-bold text-center text-[#001b52]">
          Projects
        </h1>
        <p className="text-center font-medium text-sm md:text-xl text-stone-700 py-8">
          I have worked on several projects that demonstrate my proficiency in
          various areas of expertise. These projects include building full-stack
          applications with React, Next.js, and Firebase as the backend,
          resulting in a complete stack app. I have also developed CRUD
          applications and integrated APIs into some of my projects using the
          MERN stack!.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="http://samthatcode-weather-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={weatherApp}
              title="Weather App"
              framework="react"
            />
          </a>
          <a
            href="http://pvc-pipe.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={pvcPipe} title="PVC-PIPE" framework="react" />
          </a>
          <a
            href="https://surefinders-frontend.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={sureFinders}
              title="SureFinders Real Estates"
              framework="react"
            />
          </a>
          <a
            href="https://get-linked-task.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={getLinked}
              title="GetLinked Tech Hackathon 1.0"
              framework="react"
            />
          </a>

          <a
            href="https://ai-prompt-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={aiPrompt}
              title="Ai Prompt App"
              framework="nextjs"
            />
          </a>
          <a
            href="https://next-fullstack-quiz-app.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={familyGuy}
              title="Full Stack Family Guy with Quiz"
              framework="nextjs"
            />
          </a>

          <a
            href="https://cryptoworldgecko-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={cryptoApp}
              title="Full Stack Crypto API App"
              framework="react"
            />
          </a>
          <a
            href="https://netflix-webapp-clone.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem
              img={netflixApp}
              title="Full Stack Netflix Clone App"
              framework="react"
            />
          </a>
          <a
            href="https://todo-crudfirebase-app.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProjectItem img={todoApp} title="Todo App" framework="react" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
