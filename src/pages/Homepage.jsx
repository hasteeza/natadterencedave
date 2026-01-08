"use client";
import { useTheme } from "../hooks/use-theme";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, Mail, Download, MapPin } from "lucide-react";
import { RiStackLine, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiNetlify } from "react-icons/si";
import { SlPicture } from "react-icons/sl";
import {
  IoLogoReact,
  IoLogoJavascript,
  IoLogoVercel,
  IoLogoGithub,
  IoLogoNpm,
  IoLogoFigma,
  IoBriefcase,
} from "react-icons/io5";
import { BentoCard } from "../components/BentoCard.jsx";
import { BentoGrid } from "../components/BentoGrid.jsx";
import { ActionButton } from "../components/ActionButton.jsx";
import Footer from "../components/Footer.jsx";
import TextType from "../components/TextType.jsx";
import VerticalStepper from "../components/VerticalStepper.jsx";
import ImageMarquee from "../components/ImageMarquee.jsx";

export default function Homepage() {
  const { theme, toggleTheme, mounted } = useTheme();
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };

  const experienceSteps = [
    {
      title: "Principal AI Engineer",
      subtitle: "Standard Chartered",
      year: "2025",
    },
    {
      title: "AI Ops Engineer",
      subtitle: "Centre of Excellence for GenAI, Cambridge",
      year: "2025",
    },
    {
      title: "Senior Full-Stack Developer",
      subtitle: "Core Technology, Cambridge",
      year: "2024",
    },
  ];

  const images = [
    "/images/muruk.jpg",
    "/images/pp.jpg",
    "/images/profile-w.jpg",
    "/images/sunset.jpg",
    "/images/water.jpg",
  ];

  return (
    <main
      className={`min-h-screen transition-colors ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* ⬇️ CONTAINER — UNCHANGED */}
      <div className="max-w-4xl mx-auto px-4 py-8">
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
                  ? "/images/dave-dark.jpg"
                  : "/images/dave-light.jpg"
              }
              alt="Portrait of Terence Dave Natad"
              className="rounded-lg object-cover
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
                      theme === "light"
                        ? "bg-white border-black text-black hover:bg-black hover:text-white"
                        : "bg-[#111111] border-gray-300 text-white hover:bg-white hover:text-black"
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
                className={`mt-1 flex items-center gap-1 text-xs sm:text-sm ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                <MapPin className="w-3 h-3 shrink-0" />
                Metro Manila, Philippines
              </p>

              {/* Role */}
              <TextType
                className="mt-2 text-[10px] md:text-base"
                text={[
                  "Frontend Developer",
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
              className="col-span-1 md:col-span-2 md:row-span-2 space-y-2"
            >
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <IoBriefcase className="w-4 h-4" />
                  <h2
                    className={`text-lg font-bold ${
                      theme === "light" ? "text-black" : "text-white"
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
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <IoLogoReact className="text-[#61DAFB]" />
                      React
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <IoLogoJavascript className="text-yellow-400" />
                      Javascript
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
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
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <IoLogoVercel />
                      Vercel
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
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
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <IoLogoNpm />
                      npm
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <IoLogoGithub />
                      GitHub
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <VscVscode className="text-[#007ACC]" />
                      VS Code
                    </span>
                    <span className="inline-flex items-center gap-2 text-xs px-2 py-0.5 rounded-md bg-foreground/5 border border-foreground/10">
                      <IoLogoFigma />
                      Figma
                    </span>
                  </div>
                </div>
              </div>
            </BentoCard>

            {/* CARD 4 — WIDE */}
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-2 space-y-2"
            >
              <h3 className="font-semibold">Experience</h3>
            </BentoCard>
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-4 space-y-2"
            >
              <h3 className="font-semibold">Experience</h3>
            </BentoCard>
            <BentoCard
              theme={theme}
              className="p-4 col-span-1 md:col-span-6 space-y-2"
            >
              <div>
                <div className="inline-flex items-center gap-2">
                  <SlPicture className="w-4 h-4" />
                  <h3 className="font-semibold text-lg">Gallery</h3>
                </div>

                <div className="mt-4">
                  <ImageMarquee
                    images={images}
                    speed={40}
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
