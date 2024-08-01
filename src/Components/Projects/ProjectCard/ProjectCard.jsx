/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  timeline,
  githubLink,
  hostURL,
  techStack,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={`bg-white rounded-lg w-[90vw] sm:w-[20vw] h-[550px] ${isExpanded?"sm:h-fit":"sm:h-[600px]"}  flex flex-col`}>
      <div className="flex flex-col flex-grow p-6">
        <img src={image} className="w-[250ps] sm:w-[400px] self-center"  alt="" />
        <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{timeline}</p>
        <div className="flex items-center mt-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 mr-2"
            >
              <FaGithub size={24} />
            </a>
          )}
          {hostURL && (
            <a
              href={hostURL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800"
            >
              <FaGlobe size={24} />
            </a>
          )}
        </div>
        {!isExpanded && <div className="mt-4">
          <div className="flex flex-row flex-wrap gap-2 text-primary-dark">
            {techStack.map((skill, index) => (
              <div
                className="mt-2 bg-blue-light p-2 w-fit h-fit rounded-2xl"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>}
        {isExpanded && <p className="mt-4 text-gray-600">{description}</p>}
      </div>
      <div className="p-6 mt-auto hidden sm:block">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none"
        >
          {isExpanded ? "Show Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
