import React from "react";
const Navbar = () => {
  return (
    <>
      <nav className=" bg-[#F8F8F8] p-6 md:px-12 sticky top-0 z-50 outline">
        <div className="text-black font-bold flex justify-evenly xl:justify-center xl:gap-32">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
