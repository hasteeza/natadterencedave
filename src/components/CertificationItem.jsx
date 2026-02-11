import React from "react";

const CertificationItem = ({ cert, theme }) => {
  const cardStyle =
    theme === "dark"
      ? "bg-black hover:bg-gray-900"
      : "bg-[#F3F4F6] hover:bg-gray-200";

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block p-2 rounded-md transition-colors ${cardStyle}`}
    >
      <h3 className="font-semibold text-sm">{cert.title}</h3>
      <p className="text-[11px]">{cert.provider}</p>
    </a>
  );
};

export default CertificationItem;
