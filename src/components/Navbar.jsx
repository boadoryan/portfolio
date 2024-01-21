import React from "react";
const Navbar = () => {
  const ScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: offsetTop - 170,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className=" bg-[#F8F8F8] p-6 md:px-12 sticky top-0 z-50 border-b border-black opacity-95">
        <div className="text-black font-bold flex justify-evenly xl:justify-center xl:gap-32">
          <a className="hover:cursor-pointer hover:underline" href="">
            Home
          </a>
          <a
            className="hover:cursor-pointer hover:underline"
            onClick={() => ScrollToSection("about-section")}
          >
            About
          </a>
          <a
            className="hover:cursor-pointer hover:underline"
            onClick={() => ScrollToSection("projects-section")}
          >
            Projects
          </a>
          <a
            className="hover:cursor-pointer hover:underline"
            onClick={() => ScrollToSection("contact-section")}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
