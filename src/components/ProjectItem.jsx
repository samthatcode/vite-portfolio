import React from "react";

const ProjectItem = ({ img, title, framework }) => {
  return (
    <div className="transition ease-in hover:-translate-y-1 hover:scale-105 duration-300 relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        {framework === 'nextjs' && (
          <p className="pb-4 pt-2 text-[#001b5e] font-extrabold md:text-3xl text-base text-center">Next.js</p>
        )}
        {framework === 'react' && (
          <p className="pb-4 pt-2 text-[#001b5e] font-extrabold md:text-3xl text-base text-center">React.js</p>
        )}

        <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
          Live Project
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
