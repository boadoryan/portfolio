import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiFilePdfDuotone } from "react-icons/pi";
import { BsFiletypePdf } from "react-icons/bs";
import { workExperience } from "./work_data";

const EducationExperience = () => {
  return (
    <>
      <div className="xl:flex flex-col xl:col-span-4 mt-8 xl:mt-0">
        <div className="">
          <h3 className="font-bold text-xl mb-6 lg:text-2xl">Education</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid sm:grid-cols-2 xl:grid-cols-2">
            <div className="flex flex-col justify-between border border-black rounded p-4">
              <div>
                <p className="text-xs camosun">
                  Camosun College | Sept 2021 - Aug 2023
                </p>
                <p className="font-bold text-xl  my-1">
                  Interactive Media Developer
                </p>
              </div>
              <div className="flex gap-2 text-sm items-center">
                <FaLocationDot />
                <span>Victoria, British Columbia</span>
              </div>
            </div>
            <div className="resume-section border-black rounded border p-4">
              <div className="flex sm:flex-col items-center gap-4">
                <BsFiletypePdf className="text-5xl " />
                <div className="flex flex-col sm:items-center gap-2">
                  <p className="font-bold text-xl">Resume / CV</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="assets/Resume_RyanBoado.pdf"
                    className="md:text-lg underline hover:text-blue-600"
                  >
                    Click here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="font-bold text-xl mb-6 lg:text-2xl mt-8">
          Work Experience
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="experience border border-black p-4 rounded">
            {workExperience.map((work, index) => (
              <div key={index}>
                <div className=" border-b border-black md:flex justify-between">
                  <div>
                    <div className="flex gap-1 camosun text-xs">
                      <span>{work.company} |</span>
                      <p>{work.startDate_endDate}</p>
                    </div>
                    <p className="font-bold text-xl my-1.5">{work.title}</p>
                  </div>

                  <span className="flex items-center gap-1 mb-4 text-sm">
                    <FaLocationDot />
                    <span>{work.location}</span>
                  </span>
                </div>
                <div className="ml-6 mt-4 text-sm">
                  <ul className="leading-8">
                    {work.bullet_points.map((bullet, index) => (
                      <div key={index}>
                        <li>{bullet}</li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationExperience;
