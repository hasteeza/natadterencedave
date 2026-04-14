import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const ProjectItem = ({ project, theme }) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#111111] border-[#333333]"
      : "bg-white border-gray-200";

  const tagBg =
    theme === "dark"
      ? "bg-[#222222] text-gray-300"
      : "bg-gray-100 text-gray-700";

  const buttonStyle =
    theme === "dark"
      ? "bg-[#222222] hover:bg-gray-700 text-white"
      : "bg-gray-100 hover:bg-gray-200 text-black";

  return (
    <div
      className={`border overflow-hidden rounded-lg shadow-sm md:shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 ${cardBg}`}
    >
      {/* Image */}
      <div className="w-full h-auto overflow-hidden bg-gray-300 rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-auto object-contain transition-transform duration-200"
        />
      </div>

      {/* Content */}
      <div className="p-3 md:p-4 space-y-3">
        {/* Title */}
        <h3 className="text-base md:text-lg font-semibold">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs md:text-sm opacity-75">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-2 py-1 rounded-full font-medium ${tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 pt-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${buttonStyle}`}
          >
            <FiExternalLink className="w-4 h-4" />
            Website
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-medium transition-colors ${buttonStyle}`}
          >
            <FiGithub className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
