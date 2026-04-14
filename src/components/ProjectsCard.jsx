import React, { useMemo, useState } from "react";
import { LuComputer } from "react-icons/lu";
import { projects } from "../data/projectsData";
import ProjectItem from "./ProjectItem";

const categories = ["Frontend Development", "Software Testing"];

const ProjectsCard = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState(
    "Frontend Development"
  );

  const activeButtonStyle =
    theme === "dark"
      ? "bg-white text-black border border-slate-200 shadow-lg"
      : "bg-[#111111] text-white border border-slate-950 shadow-lg";

  const inactiveButtonStyle =
    theme === "dark"
      ? "bg-[#000000] text-white border border-[#333333] hover:bg-slate-900"
      : "bg-[#FAFAFA] text-slate-950 border border-slate-200 hover:bg-slate-100";

  const filteredProjects = useMemo(
    () => projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="col-span-1 md:col-span-4 space-y-2">
      <div className="inline-flex items-center gap-2">
        <LuComputer className="w-4 h-4" />
        <h3 className="font-semibold text-lg">Projects</h3>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              className={`px-4 py-2 text-sm font-medium transition duration-200 ${
                isActive ? activeButtonStyle : inactiveButtonStyle
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectItem
              key={project.title}
              project={project}
              theme={theme}
            />
          ))
        ) : (
          <div
            className={`col-span-full rounded-2xl border p-6 text-sm shadow-sm ${
              theme === "dark"
                ? "border-[#333333] bg-[#111111] text-slate-300"
                : "border-slate-200 bg-white/70 text-slate-600"
            }`}
          >
            No projects found for {activeCategory} yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
