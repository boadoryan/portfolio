import React from "react";

const Header = ({ text }) => {
  return (
    <h3 className="font-bold mb-12 text-black text-2xl lg:text-3xl xl:text-4xl">
      {text}
    </h3>
  );
};

export default Header;
