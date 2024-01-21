import React from "react";
import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import TechnologyPill from "../../components/TechnologyPill";

const ProjectCard = ({
  technologies,
  title,
  description,
  image,
  siteLink,
  githubLink,
}) => {
  return (
    <>
      <div className=" card-container border border-black mt-4 p-8 lg:p-12 rounded grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-3 flex flex-col justify-center lg:px-2 xl:px-6">
          <p className=" text-3xl lg:text-4xl xl:text-5xl font-bold lg:w-4/5 ">
            {title}
          </p>
          <div className="flex flex-wrap gap-2 mt-4 lg:mt-6">
            {technologies.map((technology, index) => (
              <TechnologyPill key={index} text={technology} />
            ))}
          </div>
          <p className=" my-10 lg:w-4/5  whitespace-pre-wrap text-lg">
            {description}
          </p>
          <div className="buttons flex gap-4 lg:mt-8 ">
            {siteLink && (
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center border border-black rounded p-1.5 hover:bg-[#c9c9c9] hover:cursor-pointer"
              >
                <span className="">Live Site</span>
                <span className="ml-2">
                  <GoLinkExternal className="text-lg" />
                </span>
              </a>
            )}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border border-black rounded p-1.5 hover:bg-[#c9c9c9] hover:cursor-pointer"
            >
              <span className="">Github Repo</span>
              <span className="ml-2">
                <FaGithub className="text-lg" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-3  rounded hidden lg:flex items-center">
          <img
            className="h-auto object-cover border border-black rounded"
            src={image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
