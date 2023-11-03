import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-6 mb-24 md:px-16 lg:px-12">
      {children}
    </div>
  );
};

export default Container;
