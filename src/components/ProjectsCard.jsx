import React from "react";
import { LuComputer } from "react-icons/lu";
import { projects } from "../data/projectsData";
import ProjectItem from "./ProjectItem";

const ProjectsCard = ({ theme }) => {
  return (
    <div className="col-span-1 md:col-span-4 space-y-2">
      <div className="inline-flex items-center gap-2">
        <LuComputer className="w-4 h-4" />
        <h3 className="font-semibold text-lg">Projects</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            project={project}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
