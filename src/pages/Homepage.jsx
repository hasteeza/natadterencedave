import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Mail, Download, MapPin } from "lucide-react";
import { FaCameraRetro } from "react-icons/fa";
import {IoBookOutline,} from "react-icons/io5";
import { BentoCard } from "../components/BentoCard.jsx";
import { BentoGrid } from "../components/BentoGrid.jsx";
import { ActionButton } from "../components/ActionButton.jsx";
import Footer from "../components/Footer.jsx";
import TextType from "../components/TextType.jsx";
import ImageMarquee from "../components/ImageMarquee.jsx";
import TechStack from "../components/TechStack.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import { experienceSteps } from "../data/experienceSteps.js";
import ProjectsCard from "../components/ProjectsCard.jsx";
import CertificationsCard from "../components/CertificationsCard.jsx";
import RecommendationCard from "../components/RecommendationCard.jsx";
import PersonalSectionsCard from "../components/PersonalSectionsCard.jsx";

export default function Homepage() {
  const { theme, toggleTheme, mounted } = useTheme();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

 

  const images = [
    "/images/muruk.jpg",
    "/images/sunset.jpg",
    "/images/water.jpg",
    "/images/tree-1.jpeg",
    "/images/tree-2.jpeg",
    "/images/sunset-1.jpeg",
    "/images/sunset-2.jpeg",
    "/images/sunset-3.jpeg",
    "/images/barracks.jpeg",
    "/images/fac-4.jpeg",
    "images/fac-3.jpeg",
    "images/fac-2.jpeg",
    "images/fac-1.jpeg",
    "images/river.jpeg",
    "images/robotics.jpeg",
    "images/temple.jpeg",
  ];

  return (
    <main
      className={`min-h-screen transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* ⬇️ CONTAINER — UNCHANGED */}
      <div className="max-w-4xl mx-auto px-4 py-8 [font-family:Poppins]">
        {/* PROFILE */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 md:gap-6">
            {/* Avatar */}
            <img
              fetchPriority="high"
              width={160}
              height={160}
              decoding="async"
              src={
                theme === "dark"
                  ? "/images/me-in-pm.jpg"
                  : "/images/me-in-am.jpg"
              }
              alt="Portrait of Terence Dave Natad"
              className="object-cover
                w-40 h-40
                shrink-0
                "
            />

            {/* Info */}
            <div className="flex-1 min-w-0">
              {/* Name + Toggle */}
              <div className="flex items-start justify-between gap-3">
                <h1 className="font-bold leading-tight text-lg md:text-2xl truncate">
                  Terence Dave Natad
                </h1>

                {/* THEME TOGGLE BUTTON */}
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className={`group flex items-center gap-1 px-1 py-0.5 rounded-lg border transition-all duration-300 focus:outline-none hover:scale-105 hover:shadow-lg cursor-pointer ${
                      theme === "dark"
                        ? "border-[#222222] bg-[#111111] text-white hover:bg-white hover:text-black"
                        : "border-gray-300 bg-white text-black hover:bg-black hover:text-white"
                    }`}
                    aria-label="Toggle theme"
                  >
                    {theme === "light" ? (
                      <>
                        <svg
                          className="w-3 h-3 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.59-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.59 1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                        </svg>
                        <span className="hidden sm:flex text-xs font-medium">
                          Light Mode
                        </span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-3 h-3 text-white group-hover:text-black"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        <span className="hidden sm:flex text-xs font-medium">
                          Dark Mode
                        </span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Location */}
              <p
                className={`mt-1 flex items-center gap-1 text-xs sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <MapPin className="w-3 h-3 shrink-0" />
                Metro Manila, Philippines
              </p>

              {/* Role */}
              <TextType
                className="mt-2 text-[10px] md:text-lg"
                text={[
                  "Frontend Developer",
                  "Vibe Coder",
                  "Aspiring Photographer",
                  "UI/UX Designer",
                  "Tech Enthusiast",
                ]}
                typingSpeed={150}
                pauseDuration={2000}
                showCursor={true}
                cursorCharacter="|"
              />

              {/* CTA BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-2">
                <ActionButton
                  icon={Calendar}
                  label="Schedule a Call"
                  theme={theme}
                />
                <ActionButton icon={Mail} label="Send Email" theme={theme} />
                <ActionButton
                  icon={Download}
                  label="Download Resume"
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* BENTO GRID */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <BentoGrid>
            {/* CARD 1 */}
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-4 space-y-2 group"
            >
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16h-1v-4h-1m1-4h.01M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
                  />
                </svg>

                <h3 className="font-semibold text-lg">About Me</h3>
              </div>
              <p className="text-sm leading-relaxed mt-2">
                I'm a front-end developer and UI/UX designer who loves creating
                websites and apps that are easy to use and look great. I work
                mostly with React.js and Figma, turning design ideas into
                smooth, responsive user interfaces.
                <br />
                <br />
                I’m always learning new front-end skills, exploring modern
                tools, and finding ways to write clean, efficient code. I enjoy
                combining design and development to build apps that are both
                functional and visually appealing.
                <br /> <br />
                My goal is to create digital experiences that are helpful,
                enjoyable, and make a real impact for users and businesses.
              </p>
            </BentoCard>

            {/* CARD 2 — VERTICAL */}
            <BentoCard
              theme={theme}
              className="col-span-1 md:col-span-2 md:row-span-2"
            >
              <ExperienceCard
                theme={theme}
                experienceSteps={experienceSteps}
              />
            </BentoCard>

            {/* CARD 3 */}
           <BentoCard theme={theme} className="col-span-1 md:col-span-4">
              <TechStack theme={theme} />
            </BentoCard>

            {/* CARD 4 — WIDE */}
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-2 space-y-2"
            >
              <div className="inline-flex items-center gap-2">
                <IoBookOutline className="w-4 h-4" />
                <h3 className="font-semibold text-lg">Beyond Coding</h3>
              </div>
              <div>
                <p className="text-sm leading-relaxed mt-2">
                 When I’m not coding, I study how components, layout, and design systems work together to create clean, intuitive user experiences. 
                 <br />
                 <br />
                 I focus on improving usability, visual balance, and consistency to build interfaces that are both functional and aesthetically refined.
                </p>
              </div>
            </BentoCard>
           
            <BentoCard theme={theme} className="col-span-1 md:col-span-4">
              <ProjectsCard theme={theme} />
            </BentoCard>
                      
            <BentoCard theme={theme} className="col-span-1 md:col-span-3">
              <CertificationsCard theme={theme} />
            </BentoCard>      

            <BentoCard theme={theme} className="p-4 col-span-1 md:col-span-3 space-y-2">
              <RecommendationCard theme={theme} />
            </BentoCard>

            <BentoCard theme={theme} className="p-4 col-span-1 md:col-span-6 space-y-2">
              <PersonalSectionsCard theme={theme} />
            </BentoCard>
            
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-6 space-y-2"
            >
              <div>
                <div className="inline-flex items-center gap-2">
                  <FaCameraRetro className="w-4 h-4" />
                  <h3 className="font-semibold text-lg">Gallery</h3>
                </div>

                <div className="mt-4">
                  <ImageMarquee
                    images={images}
                    speed={100}
                    containerClassName="py-2"
                    imageClassName="hover:scale-105 transition"
                  />
                </div>
              </div>
            </BentoCard>
          </BentoGrid>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}
