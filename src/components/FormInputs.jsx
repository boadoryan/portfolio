import React from "react";

export const TextInput = ({ label }) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-sm md:text-lg" htmlFor="firstName">
        {label}
      </label>
      <br />
      <input className="bg-white text-black text-sm md:text-md w-full outline rounded px-2 py-3 md:py-4 mt-2" />
    </div>
  );
};

export const TextAreaInput = ({ label }) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-sm md:text-lg" htmlFor="description">
        {label}
      </label>
      <br />
      <textarea
        rows="8"
        className="bg-white text-black text-sm md:text-md w-full outline rounded px-2 py-3 md:py-4 mt-2"
      />
    </div>
  );
};
