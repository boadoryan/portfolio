import React from "react";
// import Container from "./components/Container";
// import Header from "./components/Header";
// import Technologies from "./Technologies";
// import EducationExperience from "./EducationExperience";

import Container from "../../components/Container";
import Header from "../../components/Header";
import EducationExperience from "./EducationExperience";
import Technologies from "./Technologies";


const About = () => {
  return (
    <Container>
      <Header text={"01. About"} />
      <div className="text-black grid grid-cols-1 xl:grid-cols-7 xl:gap-x-36">
        <div className="about-text xl:col-span-3">
          <h3 className="font-bold text-xl">Welcome to my portfolio!</h3>
          <p className="my-6 lg:text-lg">
            I'm Ryan Boado, a front-end developer who loves creating enjoyable
            websites with a focus on user experience and design.
          </p>
          <p className="lg:text-lg">
            I recently completed a diploma in{" "}
            <span className="text-blue-700 font-semibold">
              Interactive Media Development
            </span>{" "}
            at Camosun College, specializing in{" "}
            <span className="text-blue-700 font-semibold">web development</span>{" "}
            and
            <span className="text-blue-700 font-semibold"> UX/UI design.</span>
          </p>
          <p className=" my-6 lg:text-lg">
            My aim is to create seamless and user-friendly websites that
            everyone can use. Let's connect and embark on this digital journey
            together! 🚀
          </p>
          <p className="lg:text-lg">
            When I'm not at my computer, I enjoy cooking, gaming, and modified
            cars.
          </p>
          <p className="mt-6 lg:text-lg">Find my resume here</p>
        </div>
        <EducationExperience />
      </div>
      <Technologies />
    </Container>
  );
};

export default About;
