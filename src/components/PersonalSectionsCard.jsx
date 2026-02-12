import React from "react";
import { personalSections } from "../data/personalSectionsData";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const PersonalSectionsCard = () => {
  return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {personalSections.map((section, index) => (
          <div key={index}>
            {/* Section Header */}
            {section.title && section.icon && (
              <div className="inline-flex items-center gap-2 mb-2">
                <section.icon className="w-4 h-4" />
                <h3 className="text-sm font-semibold">{section.title}</h3>
              </div>
            )}

            {/* Goals or text items */}
            {section.items && (
              <div className="space-y-2 mt-2">
                {section.items.map((item, idx) => (
                  <p key={idx} className="text-[11px] p-2 text-left">
                    {item}
                  </p>
                ))}
              </div>
            )}

            {/* Links */}
            {section.links && (
              <div className="grid grid-cols-1 gap-3 mt-4">
                {section.links.map((link, idx) => (
                  <a
                    key={idx}
                    className="inline-flex items-center gap-2 p-1.5 hover:-translate-y-1 duration-200 transition-all hover:shadow-xl"
                    href={link.url}
                    target="_blank"
                  >
                    <link.icon />
                    <span className="text-[12px]">{link.label}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Contact section */}
            {section.text && (
              <div className="text-[11px] p-2 mt-4">
                {section.text}
                {section.buttonText && (
                  <div className="mt-2 inline-flex items-center gap-2 font-semibold">
                    {section.buttonText} <section.buttonIcon />
                  </div>
                )}
              </div>
            )}

            {/* Grid Links / Misc */}
            {section.gridLinks && (
              <div className="grid grid-cols-1 gap-6 mt-4">
                {section.gridLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target={link.url ? "_blank" : "_self"}
                    className="gap-2 p-1.5 hover:-translate-y-1 duration-200 transition-all hover:shadow-xl"
                  >
                    <div className="text-[11px]">
                      <div className="inline-flex items-center gap-2">
                        <link.icon className="w-3 h-3" />
                        {link.label}
                      </div>
                      <div className="flex justify-between items-center gap-2">
                        <p>{link.info}</p>
                        <MdOutlineKeyboardArrowRight />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
  );
};

export default PersonalSectionsCard;
