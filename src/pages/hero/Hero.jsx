import React from "react";
import Container from "../../components/Container";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineDown,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-[100svh]">
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          className=" h-auto w-[16rem] lg:w-[20rem]"
          src="assets/me2.svg"
          alt=""
        />
        <p className="text-5xl md:text-6xl font-extrabold text-black">
          RYAN BOADO
        </p>
        <p className="text-xl md:text-2xl text-gray-600">FRONT-END DEVELOPER</p>
        <div className="icons flex gap-4 text-4xl md:text-5xl text-black">
          <a
            href="https://www.instagram.com/ryan.boado/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9c9c9]"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-boado-a486191b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9c9c9]"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://github.com/boadoryan/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c9c9c9]"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
