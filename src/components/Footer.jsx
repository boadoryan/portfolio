import React from "react";

const Footer = () => {
  return (
    <footer className=" py-6 text-black text-center border-t border-black bg-[#F8F8F8]">
      <div className="container mx-auto">
        <p className="font-bold">{new Date().getFullYear()} Dev Portfolio </p>
        <p>Designed and Built by Ryan Boado</p>
      </div>
    </footer>
  );
};

export default Footer;
