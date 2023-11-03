import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EducationExperience = () => {
  return (
    <>
      <div className="xl:flex flex-col xl:col-span-4 mt-8 xl:mt-0">
        <h3 className="font-bold text-xl mb-6 lg:text-2xl">Experience</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-2">
          <div className="experience outline p-4 rounded">
            <div className="experience-1">
              <p className="text-sm camosun">
                Camosun College, Government of BC
              </p>
              <p className="font-bold text-xl my-1">Capstone Project</p>
              <p className="text-base font-normal mb-8">May 2023 - Aug 2023</p>
              <div className="flex gap-2 items-center ">
                <FaLocationDot />
                <span>Victoria, British Columbia</span>
              </div>
            </div>
          </div>
          <div className="experience-2 outline p-4 rounded">
            <p className="text-sm camosun">Camosun College</p>
            <p className="font-bold text-xl my-1 ">ICS 199 Summer Project</p>
            <p className="text-base font-normal mb-8">May 2022 - July 2022</p>
            <div className="flex gap-2 items-center">
              <FaLocationDot />
              <span>Victoria, British Columbia</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-bold text-xl mb-6 lg:text-2xl">Education</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-2">
            <div className="resume-section outline rounded p-4">
              <p className="text-sm camosun">Camosun College</p>
              <p className="font-bold text-xl  my-1">
                Interactive Media Developer
              </p>
              <p className="text-base font-normal mb-8">Sept 2021 - Aug 2023</p>
              <div className="flex gap-2 items-center">
                <FaLocationDot />
                <span>Victoria, British Columbia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationExperience;
