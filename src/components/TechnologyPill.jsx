import React from "react";

const TechnologyPill = ({ text }) => {
  return (
    <div className="border border-black rounded-xl px-3 py-0.5 text-xs md:text-sm">
      {text}
    </div>
  );
};

export default TechnologyPill;
