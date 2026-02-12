import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Mail, Download, MapPin } from "lucide-react";
<<<<<<< HEAD
import { FaCameraRetro } from "react-icons/fa";
import {IoBookOutline,} from "react-icons/io5";
=======
import {
  RiStackLine,
  RiTailwindCssFill,
  RiContactsBook3Line,
  RiMessengerLine,
} from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";
import { SlPicture } from "react-icons/sl";
import { LuComputer, LuBadgeCheck, LuGoal, LuPhone } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { MdArrowRightAlt, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineLinkSlash } from "react-icons/hi2";
import {
  IoLogoReact,
  IoLogoJavascript,
  IoLogoVercel,
  IoLogoGithub,
  IoLogoNpm,
  IoLogoFigma,
  IoBriefcase,
  IoBookOutline,
  IoLogoInstagram,
} from "react-icons/io5";
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
import { BentoCard } from "../components/BentoCard.jsx";
import { BentoGrid } from "../components/BentoGrid.jsx";
import { ActionButton } from "../components/ActionButton.jsx";
import Footer from "../components/Footer.jsx";
import TextType from "../components/TextType.jsx";
<<<<<<< HEAD
import ImageMarquee from "../components/ImageMarquee.jsx";
import TechStack from "../components/TechStack.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import { experienceSteps } from "../data/experienceSteps.js";
import ProjectsCard from "../components/ProjectsCard.jsx";
import CertificationsCard from "../components/CertificationsCard.jsx";
import RecommendationCard from "../components/RecommendationCard.jsx";
import PersonalSectionsCard from "../components/PersonalSectionsCard.jsx";
=======
import VerticalStepper from "../components/VerticalStepper.jsx";
import ImageMarquee from "../components/ImageMarquee.jsx";
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a

export default function Homepage() {
  const { theme, toggleTheme, mounted } = useTheme();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

<<<<<<< HEAD
 

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
=======
  const experienceSteps = [
    {
      title: "Professional Tambay",
      subtitle: "Sa Bahay Lang",
      year: "2026",
    },
    {
      title: "BS Information Technology",
      subtitle: "Western Mindanao State University",
      year: "2025",
    },
    {
      title: "Capstone Project",
      subtitle: "Frontend Developer",
      year: "2024",
    },
    {
      title: "Hello World!",
      subtitle: "Wrote my first lines of code",
      year: "2022",
    },
  ];

  const images = [
    "/images/muruk.jpg",
    "/images/pp.jpg",
    "/images/profile-w.jpg",
    "/images/sunset.jpg",
    "/images/water.jpg",
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
  ];

  return (
    <main
      className={`min-h-screen transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* ⬇️ CONTAINER — UNCHANGED */}
<<<<<<< HEAD
      <div className="max-w-4xl mx-auto px-4 py-8 [font-family:Poppins]">
=======
      <div className="max-w-5xl mx-auto px-4 py-8">
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
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
<<<<<<< HEAD
              className="object-cover
=======
              className="rounded-lg object-cover
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
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
<<<<<<< HEAD
                className={`mt-1 flex items-center gap-1 text-xs sm:text-base ${
=======
                className={`mt-1 flex items-center gap-1 text-xs sm:text-sm ${
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <MapPin className="w-3 h-3 shrink-0" />
                Metro Manila, Philippines
              </p>

              {/* Role */}
              <TextType
<<<<<<< HEAD
                className="mt-2 text-[10px] md:text-lg"
                text={[
                  "Frontend Developer",
                  "Vibe Coder",
                  "Aspiring Photographer",
=======
                className="mt-2 text-[10px] md:text-base"
                text={[
                  "Frontend Developer",
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
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
<<<<<<< HEAD
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
=======
              className="col-span-1 md:col-span-2 md:row-span-2 space-y-2"
            >
              <div>
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
            </BentoCard>

            {/* CARD 3 */}
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-4 space-y-2"
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <RiStackLine />
                <h3 className="font-semibold text-lg">Tech Stack</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm mb-2">Frontend</h3>
                  <div className=" flex flex-wrap gap-1.5">
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <IoLogoReact className="text-[#61DAFB]" />
                      React
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <IoLogoJavascript className="text-yellow-400" />
                      Javascript
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <RiTailwindCssFill className="text-[#06B6D4]" />
                      Tailwind Css
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-2">
                    DevOps / Deployment
                  </h3>
                  <div className=" flex flex-wrap gap-1.5">
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <IoLogoVercel />
                      Vercel
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <SiNetlify />
                      Netlify
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-2">
                    Tools / Utilities
                  </h3>
                  <div className=" flex flex-wrap gap-1.5">
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <IoLogoNpm />
                      npm
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <IoLogoGithub />
                      GitHub
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <VscVscode className="text-[#007ACC]" />
                      VS Code
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-950 border-gray-600 text-white"
                          : "bg-gray-100 border-gray-300 text-black"
                      }`}
                    >
                      <IoLogoFigma />
                      Figma
                    </span>
                  </div>
                </div>
              </div>
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
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
<<<<<<< HEAD
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
            
=======
                  When I'm not coding, I spend my time studying how components
                  and design work together to create great user experiences.
                </p>
              </div>
            </BentoCard>
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-4 space-y-2"
            >
              <div>
                <div className="inline-flex items-center gap-2">
                  <LuComputer className="w-4 h-4" />
                  <h3 className="font-semibold text-lg">Projects</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                <BentoCard
                  theme={theme}
                  className="p-3 space-y-1 hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                >
                  <a
                    target="_blank"
                    className="block space-y-1"
                    href="https://tdrn-scientific-calculator.netlify.app/"
                  >
                    <h3 className="text-sm font-semibold">
                      Scientific Calculator
                    </h3>
                    <p className="text-xs">Online Sci-Cal</p>
                    <p
                      className={`text-xs font-mono px-2 py-1 rounded-md inline-block mt-1 ${
                        theme === "dark"
                          ? "text-white bg-black"
                          : "text-black bg-[#EAEAEA]"
                      }`}
                    >
                      sci-cal.netlify.app
                    </p>
                  </a>
                </BentoCard>
                <BentoCard
                  className="p-3 space-y-1 hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                  theme={theme}
                >
                  {" "}
                  <a
                    target="_blank"
                    className="block space-y-1 "
                    href="https://tdrn-pokeweb.netlify.app/"
                  >
                    <h3 className="text-sm font-semibold">PokeWeb</h3>
                    <p className="text-xs">Online Pokedex</p>
                    <p
                      className={`text-xs font-mono px-2 py-1 rounded-md inline-block mt-1 ${
                        theme === "dark"
                          ? "text-white bg-black"
                          : "text-black bg-[#EAEAEA]"
                      }`}
                    >
                      pokeweb.netlify.app
                    </p>
                  </a>{" "}
                </BentoCard>
                <BentoCard
                  className="p-3 space-y-1 hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                  theme={theme}
                >
                  {" "}
                  <a
                    target="_blank"
                    className="block space-y-1"
                    href="https://tdrn-blog.netlify.app/"
                  >
                    <h3 className="text-sm font-semibold">IVET</h3>
                    <p className="text-xs">Industry Visit Educational Tour</p>
                    <p
                      className={`text-xs font-mono px-2 py-1 rounded-md inline-block mt-1 ${
                        theme === "dark"
                          ? "text-white bg-black"
                          : "text-black bg-[#EAEAEA]"
                      }`}
                    >
                      ivet.netlify.app
                    </p>
                  </a>{" "}
                </BentoCard>
                <BentoCard
                  className="p-3 space-y-1 hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                  theme={theme}
                >
                  {" "}
                  <a
                    target="_blank"
                    className="block space-y-1"
                    href="https://expo.dev/accounts/hasteeza/projects/Audalert/builds/03e54a08-235d-492d-b8c5-68c2ecf34293"
                  >
                    <h3 className="text-sm font-semibold">AudAlert</h3>
                    <p className="text-xs">Soud Detection Intruder App </p>
                    <p
                      className={`text-xs font-mono px-2 py-1 rounded-md inline-block mt-1 ${
                        theme === "dark"
                          ? "text-white bg-black"
                          : "text-black bg-[#EAEAEA]"
                      }`}
                    >
                      expo.dev
                    </p>
                  </a>{" "}
                </BentoCard>
              </div>
            </BentoCard>
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-3 space-y-2"
            >
              <div>
                <div className="inline-flex items-center gap-2">
                  <LuBadgeCheck />
                  <h2 className="text-lg font-bold">Certifications</h2>
                </div>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <a
                    target="_blank"
                    className={`block p-2 rounded-md transition-colors ${
                      theme === "dark"
                        ? "bg-black hover:bg-gray-900"
                        : "bg-[#F3F4F6] hover:bg-gray-200"
                    }`}
                    href="https://www.freecodecamp.org/certification/fcc21caa065-c80a-4fbe-9fb6-585b84f639a2/responsive-web-design"
                  >
                    <h3 className="font-semibold text-sm">
                      Responsive Web Design
                    </h3>
                    <p className="text-[11px]">freeCodeCamp</p>
                  </a>
                  <a
                    target="_blank"
                    className={`block p-2 rounded-md transition-colors ${
                      theme === "dark"
                        ? "bg-black hover:bg-gray-900"
                        : "bg-[#F3F4F6] hover:bg-gray-200"
                    }`}
                    href="https://www.linkedin.com/learning/certificates/c7c1b465aa770722c0ab57b4b62ba1b92f35cc353b97cede8e8042582e6f95fd?trk=share_certificate"
                  >
                    <h3 className="font-semibold text-sm">Learn CSS</h3>
                    <p className="text-[11px]">LinkedIn</p>
                  </a>
                  <a
                    target="_blank"
                    className={`block p-2 rounded-md transition-colors ${
                      theme === "dark"
                        ? "bg-black hover:bg-gray-900"
                        : "bg-[#F3F4F6] hover:bg-gray-200"
                    }`}
                    href="https://www.linkedin.com/learning/certificates/d4267231d69763d1703201b77133538f5fb63e381ba5ae1f8cd7803136d7dee2?trk=share_certificate"
                  >
                    <h3 className="font-semibold text-sm">
                      Advance Your Skills in HTML
                    </h3>
                    <p className="text-[11px]">LinkedIn</p>
                  </a>
                  <a
                    href="https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzI1IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODE0ODEyM184NDgzNDA1MTc0MzkyMTE3NjA4NC5wbmciLCJ1c2VybmFtZSI6IlRlcmVuY2UgRGF2ZSBSLiBOYXRhZCJ9&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2F8148123_84834051743921176084.png&_branch_match_id=1538565048215986113&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1veqiCp0TvQvMQ1Osq8rSk1LLSrKzEuPTyrKLy9OLbL1AapJTfHMAwCTmDkCPwAAAA%3D%3D"
                    target="_blank"
                    className={`block p-2 rounded-md transition-colors ${
                      theme === "dark"
                        ? "bg-black hover:bg-gray-900"
                        : "bg-[#F3F4F6] hover:bg-gray-200"
                    }`}
                  >
                    <h3 className="font-semibold text-sm">
                      ReactJS for Beginners
                    </h3>
                    <p className="text-[11px]">simplilearn</p>
                  </a>
                </div>
              </div>
            </BentoCard>
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-3 space-y-2"
            >
              <div className="flex items-center justify-center">
                <h3 className="text-lg font-semibold">Under Development</h3>
              </div>
            </BentoCard>
            <BentoCard
              theme={theme}
              className="p-6 col-span-1 md:col-span-6 space-y-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <LuGoal className="w-4 h-4" />
                      <h3 className="text-sm font-semibold">Goals</h3>
                    </div>
                    <div className="space-y-2 mt-2">
                      <p
                        className={`text-[10px] p-2 rounded-lg border-0 ${
                          theme === "dark"
                            ? "bg-black hover:bg-gray-900"
                            : "bg-[#F3F4F6] hover:bg-gray-200"
                        }`}
                      >
                        I aim to grow in the IT industry by building a strong
                        foundation in modern technologies and gaining real-world
                        experience through meaningful projects.
                      </p>
                      <p
                        className={`text-[10px] p-2 rounded-lg border-0 ${
                          theme === "dark"
                            ? "bg-black hover:bg-gray-900"
                            : "bg-[#F3F4F6] hover:bg-gray-200"
                        }`}
                      >
                        I am focused on improving my technical and
                        problem-solving skills through consistent practice,
                        learning, and hands-on development.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <div className="inline-flex items-center gap-2">
                    <HiOutlineLinkSlash className="w-4 h-4" />
                    <h3 className="text-sm font-semibold">Social Links</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <a
                      className="inline-flex items-center gap-2 p-1.5 rounded-lg border hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                      href="https://www.linkedin.com/in/terence-dave-natad-952b3b359/"
                      target="_blank"
                    >
                      <CiLinkedin /> <span className="text-xs">Linkedin</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-2 p-1.5 rounded-lg border hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                      href="https://github.com/hasteeza"
                      target="_blank"
                    >
                      {" "}
                      <IoLogoGithub />
                      <span className="text-xs">GitHub</span>
                    </a>
                    <a
                      className="inline-flex items-center gap-2 p-1.5 rounded-lg border hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                      href="https://www.instagram.com/daevious404/"
                      target="_blank"
                    >
                      <IoLogoInstagram />
                      <span className="text-xs">Instagram</span>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 mb-2">
                    <RiContactsBook3Line />
                    <h3 className="font-semibold text-sm">Contact</h3>
                  </div>{" "}
                  <div
                    className={`text-[11px] p-2 rounded-lg border-0 mt-4 ${
                      theme === "dark"
                        ? "bg-black hover:bg-gray-900"
                        : "bg-[#F3F4F6] hover:bg-gray-200"
                    }`}
                  >
                    Actively seeking opportunities in the IT industry to apply
                    my technical skills, learn from real-world projects, and
                    build a strong professional career.
                    <br />
                    <br />
                    <span className="inline-flex items-center gap-2 font-semibold">
                      Get in Touch <MdArrowRightAlt />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-1 gap-3 ">
                    {" "}
                    <a
                      className="gap-2 p-1.5 rounded-lg border hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                      href="mailto:natadterencedave@gmail.com"
                    >
                      <div className="text-[9px]">
                        <div className="inline-flex items-center gap-2">
                          <Mail className="w-3 h-3" />
                          Email
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          <p className="">natadterencedave@gmail.com</p>
                          <MdOutlineKeyboardArrowRight />
                        </div>
                      </div>
                    </a>
                    <a
                      className="gap-2 p-1.5 rounded-lg border hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                      href=""
                    >
                      <div className="text-[9px]">
                        <div className="inline-flex items-center gap-2">
                          <LuPhone className="w-3 h-3" />
                          Let's Talk
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          {" "}
                          <p className="">9657-365-643</p>
                          <MdOutlineKeyboardArrowRight />
                        </div>
                      </div>
                    </a>
                    <a
                      className="gap-2 p-1.5 rounded-lg border hover:-translate-y-1 duration-200 transition-all hover:shadow-lg"
                      target="_blank"
                      href="https://www.facebook.com/terence.terence.75457081"
                    >
                      <div className="text-[9px]">
                        <div className="inline-flex items-center gap-2">
                          <RiMessengerLine className="w-3 h-3" />
                          Messenger
                        </div>
                        <div className="flex justify-between items-center gap-2">
                          {" "}
                          <p className="">Chat With Me</p>
                          <MdOutlineKeyboardArrowRight />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </BentoCard>
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-6 space-y-2"
            >
              <div>
                <div className="inline-flex items-center gap-2">
<<<<<<< HEAD
                  <FaCameraRetro className="w-4 h-4" />
=======
                  <SlPicture className="w-4 h-4" />
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
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
