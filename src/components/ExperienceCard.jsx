import React from "react";
import { IoBriefcase } from "react-icons/io5";
import VerticalStepper from "./VerticalStepper";

const ExperienceCard = ({ theme, experienceSteps }) => {
  return (
    <div className="col-span-1 md:col-span-2 md:row-span-2 space-y-2">
      <div className="inline-flex items-center gap-2 mb-6">
        <IoBriefcase className="w-4 h-4" />
        <h2
          className={`text-lg font-bold ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Experience
        </h2>
      </div>

      <VerticalStepper
        steps={experienceSteps}
        activeIndex={0}
        theme={theme}
      />
    </div>
  );
};

export default ExperienceCard;
