import React from "react";
import { techStack } from "../data/techstack";

const TechStack = () => {
  return (
    <div className="col-span-1 md:col-span-4 space-y-2">
      <div className="mb-2">
        <h3 className="font-semibold text-lg">Tech Stack</h3>
      </div>

      <div className="space-y-4">
        {techStack.map((section) => (
          <div key={section.category}>
            <h3 className="font-semibold text-sm mb-2">{section.category}</h3>

            <div className="flex flex-wrap gap-1.5">
              {section.items.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center text-xs px-2 py-0.5 rounded-md" 
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
