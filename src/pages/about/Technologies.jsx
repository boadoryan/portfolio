import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  return (
    <>
      <div className="text-black flex items-center justify-center lg:mt-24 mt-14">
        <div className="flex flex-wrap gap-x-7 gap-y-8 sm:gap-x-8 md:gap-x-12 lg:gap-x-20 xl:gap-x-24 2xl:gap-x-32">
          <div className="flex flex-col justify-center items-center gap-2">
            <FaHtml5 className="text-4xl xl:text-5xl " />
            <p className="text-center text-sm xl:text-base">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FaCss3Alt className="text-4xl xl:text-5xl" />
            <p className="text-center text-sm xl:text-base">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FaJs className="text-4xl xl:text-5xl" />
            <p className="text-center text-sm xl:text-base">Javascript</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <FaReact className="text-4xl xl:text-5xl" />
            <p className="text-center text-sm xl:text-base">React</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <SiTailwindcss className="text-4xl xl:text-5xl" />
            <p className="text-center text-sm xl:text-base">Tailwind</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGitAlt className="text-4xl xl:text-5xl" />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaGithub className="text-4xl xl:text-5xl" />
            <p>Github</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FaFigma className="text-4xl xl:text-5xl" />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
