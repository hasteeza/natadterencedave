import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { certifications } from "../data/certificationsData";
import CertificationItem from "./CertificationItem";

const CertificationsCard = ({ theme }) => {
  return (
    <div className="col-span-1 md:col-span-3 space-y-2">
      <div className="inline-flex items-center gap-2">
        <LuBadgeCheck />
        <h2 className="text-lg font-bold">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 gap-2 mt-2">
        {certifications.map((cert) => (
          <CertificationItem
            key={cert.title}
            cert={cert}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};
    
export default CertificationsCard;
