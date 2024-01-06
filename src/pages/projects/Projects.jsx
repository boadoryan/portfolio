import React from "react";

import ProjectCard from "./ProjectCard";
// import { projects } from "./projects.js";

import { projects } from "./projects_data.js";

import Container from "../../components/Container";
import Header from "../../components/Header";

const Projects = () => {
  return (
    <>
      <Container>
        <div className="text-black" id="projects-section">
          <Header text={"02. Projects"} />
          <p className=" text-lg lg:text-xl mb-12">
            This is a collection of hobby projects as well as projects I made
            during my studies. <br></br>Most have been refactored to React with
            a cleaner design.
          </p>
          {/* <p className="lg:text-xl mb-12">
            Most have been refactored to React with a cleaner design.
          </p> */}

          {/* Card */}
          <div className="flex flex-col gap-8">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  technologies={project.technologies}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  siteLink={project.siteLink}
                  githubLink={project.githubLink}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Projects;
