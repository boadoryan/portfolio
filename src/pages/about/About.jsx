import React from "react";
import Container from "../../components/Container";
import Header from "../../components/Header";
import EducationExperience from "./EducationExperience";
import Technologies from "./Technologies";

const About = () => {
  return (
    <Container>
      <Header text={"01. About"} />
      <div
        className="text-black grid grid-cols-1 xl:grid-cols-7 xl:gap-x-36"
        id="about-section"
      >
        <div className="about-text xl:col-span-3">
          <h3 className="font-bold text-xl">Welcome to my portfolio!</h3>
          <p className="my-6 text-lg">
            I'm Ryan Boado, a front-end developer who loves creating enjoyable
            websites with a focus on user experience and design.
          </p>
          <p className="text-lg">
            I've completed a diploma in{" "}
            <span className="text-blue-700 font-semibold">
              Interactive Media Development
            </span>{" "}
            at Camosun College, specializing in{" "}
            <span className="text-blue-700 font-semibold">web development</span>{" "}
            and
            <span className="text-blue-700 font-semibold"> UX/UI design.</span>
          </p>
          <p className=" my-6 text-lg">
            Things on the web are always moving fast, and I'm here to build
            straightforward websites that anyone can navigate easily. If this
            resonates with you and you're up for collaboration, I'm all ears!
            Let's work together and make something great!
          </p>
          <p className="text-lg">
            When I'm not at my computer, I enjoy cooking, gaming, chess, and
            cars.
          </p>
        </div>
        <EducationExperience />
      </div>
      <Technologies />
    </Container>
  );
};

export default About;
