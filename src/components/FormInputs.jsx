import React from "react";

export const TextInput = ({
  label,
  name,
  emailRef,
  handleEmailCheck,
  isValidEmail,
}) => {
  const isEmailInput = name === "email"; // Check if input is for email

  return (
    <div className="mb-4">
      <label className="font-bold text-sm md:text-lg" htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        name={name}
        required
        onBlur={handleEmailCheck}
        ref={emailRef}
        className="bg-white text-black w-full border border-black rounded px-2 py-3 md:py-4 mt-2"
      />
      {isEmailInput && !isValidEmail && (
        <p className="text-red-500 text-sm mt-1">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export const TextAreaInput = ({ label, name }) => {
  return (
    <div className="mb-4">
      <label className="font-bold text-sm md:text-lg" htmlFor="description">
        {label}
      </label>
      <br />
      <textarea
        name={name}
        rows="8"
        required
        className="bg-white text-black  w-full border border-black rounded px-2 py-3 md:py-4 mt-2"
      />
    </div>
  );
};
