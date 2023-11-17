import React from "react";

const Header = ({ text }) => {
  const [numberContent, textContent] = text.split(" ");
  return (
    <h3 className="mb-12 text-black">
      <span className=" text-xl md:text-2xl">{numberContent}</span>
      <span className="font-bold text-2xl lg:text-3xl xl:text-4xl">
        {" "}
        {textContent}{" "}
      </span>
    </h3>
  );
};

export default Header;
