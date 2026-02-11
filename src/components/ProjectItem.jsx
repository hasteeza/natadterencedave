import React from "react";

const ProjectItem = ({ project, theme }) => {
  const badgeStyle =
    theme === "dark"
      ? "text-white bg-black"
      : "text-black bg-[#EAEAEA]";

     

  return (
    <div className="p-3 space-y-1 hover:-translate-y-1 duration-200 transition-all hover:shadow-xl">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block space-y-1"
      >
        <h3 className="text-sm font-semibold">
          {project.title}
        </h3>

        <p className="text-xs">
          {project.description}
        </p>

        <p
          className={`text-xs font-mono px-2 py-1 rounded-md inline-block mt-1 ${badgeStyle}`}
        >
          {project.displayUrl}
        </p>
      </a>
    </div>
  );
};

export default ProjectItem;
