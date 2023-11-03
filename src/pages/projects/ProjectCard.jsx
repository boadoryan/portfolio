import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import TechnologyPill from "../../components/TechnologyPill";

const ProjectCard = ({ technologies, title, description, image }) => {
  return (
    <>
      <div className=" card-container outline mt-4 p-8 lg:p-12 rounded grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center lg:px-2 xl:px-6">
          <p className=" text-3xl lg:text-4xl xl:text-5xl font-bold lg:w-4/5 ">
            {title}
          </p>
          <div className="flex gap-2 mt-4 lg:mt-6">
            {technologies.map((technology, index) => (
              <TechnologyPill key={index} text={technology} />
            ))}
          </div>
          <p className=" my-10 lg:w-4/5 lg:text-lg whitespace-pre-wrap">
            {description}
          </p>
          <div className="buttons flex gap-4 lg:mt-8 ">
            <button className="flex items-center outline rounded p-1.5">
              <span className="lg:text-lg">Live Site</span>
              <span className="ml-2">
                <GoLinkExternal className="text-lg" />
              </span>
            </button>
            <button className="flex items-center outline rounded p-1.5">
              <span className="lg:text-lg">Github Repo</span>
              <span className="ml-2">
                <FaGithub className="text-lg" />
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-3  rounded hidden lg:flex items-center">
          <img
            className="h-auto object-cover outline rounded"
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
