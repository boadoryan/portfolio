import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

import Container from "../../components/Container";
import Header from "../../components/Header";

const Projects = () => {
  return (
    <>
      <Container>
        <div className="text-black">
          <Header text={"02. Projects"} />
          <p className="lg:text-xl">
            This is a collection of hobby projects as well as projects I made
            during my studies.
          </p>
          <p className="lg:text-xl mb-12">
            Most have been refactored to React with a cleaner design.
          </p>

          {/* Card */}
          <div className="flex flex-col gap-8">
            {projects.projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  technologies={project.technologies}
                  title={project.title}
                  description={project.description}
                  image={project.image}
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
