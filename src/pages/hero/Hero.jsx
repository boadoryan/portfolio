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
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          className=" h-auto w-[16rem] lg:w-[20rem]"
          src="public/me2.svg"
          alt=""
        />
        <p className="text-5xl md:text-6xl font-extrabold text-black">
          RYAN BOADO
        </p>
        <p className="text-xl md:text-2xl text-gray-600">FRONT-END DEVELOPER</p>
        <div className="icons flex gap-4 text-4xl md:text-5xl text-black">
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiOutlineGithub />
        </div>
      </div>
    </div>
  );
};

export default Hero;
