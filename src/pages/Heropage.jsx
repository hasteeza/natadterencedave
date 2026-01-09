import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CircleChevronRight } from "lucide-react";
import ShinyText from "../components/ShinyText";
import { SiReact, SiGithub, SiVercel, SiTailwindcss } from "react-icons/si";
import LogoLoop from "../components/LogoLoop";
import SplitText from "../components/SplitText";
import { useTheme } from "../hooks/use-theme";

const Heropage = () => {
  const { theme } = useTheme();
  const [bgColor, setBgColor] = useState("#3F5563");
  const [textColor, setTextColor] = useState("#ffffff");

  const changeTheme = (bg, text) => {
    setBgColor(bg);
    setTextColor(text);
  };

  const techLogos = useMemo(
    () => [
      { node: <SiReact />, title: "React", color: "#ffffff" },
      {
        node: <SiGithub />,
        title: "GitHub",
        color: "#ffffff",
      },
      { node: <SiVercel />, title: "Vercel", color: "#ffffff" },
      { node: <SiTailwindcss />, title: "Tailwind CSS", color: "#ffffff" },
    ],
    [theme]
  );

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: bgColor }}
    >
      {/* HEADER */}
      <header
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-easing="ease-out-cubic"
        className="flex justify-between items-center 
        px-6 md:px-20 py-6"
        style={{ backgroundColor: bgColor }}
      >
        <h1
          className="text-lg font-medium [font-family:DrukWide]"
          style={{ color: textColor }}
        >
          TDRN
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => changeTheme("#3F5563", "#ffffff")}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/40"
            style={{ backgroundColor: "#3F5563" }}
          />
          <button
            onClick={() => changeTheme("#660066", "#ffffff")}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/40"
            style={{ backgroundColor: "#660066" }}
          />
          <button
            onClick={() => changeTheme("#AA0022", "#FFF5F5")}
            className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/40"
            style={{ backgroundColor: "#AA0022" }}
          />
        </div>
      </header>

      {/* HERO */}
      <main
        className="relative gap-6 flex flex-col items-center justify-between 
        min-h-[calc(100vh-80px)] px-6 text-center overflow-hidden "
      >
        {/* INTRO */}

        {/* FRONTEND */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <SplitText
            text="Hello, my name is Terence and I am a"
            className="text-sm xs:text-2xl font-semibold text-center text-[#ffffff] [font-family:ZTNature]"
            delay={50}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            className="
            uppercase font-extrabold tracking-wide leading-[0.9] text-4xl
            xs:text-[clamp(3rem,8vw,8rem)]
            [font-family:DrukWide]
          "
            style={{ color: textColor }}
          >
            Frontend
          </h1>

          {/* DEVELOPER (outlined) */}
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="800"
            className="
            uppercase font-extrabold tracking-wider leading-[0.9] text-4xl
            xs:text-[clamp(3rem,8vw,8rem)]
            text-transparent
            [-webkit-text-stroke:1px_white]
            [font-family:DrukWide]
          "
          >
            Developer
          </h1>
        </div>

        {/* IMAGE */}
        <img
          fetchPriority="high"
          data-aos="fade-up"
          src="/images/deve.png"
          alt="Developer"
          loading="lazy"
          className="
            absolute bottom-0
            h-full
            z-10
            pointer-events-none
            shrink
          "
        />

        {/* CTA */}
        <Link
          to="/home"
          className="
            mt-44 inline-flex items-center gap-2
            px-4 py-2 text-xs md:text-base
            sm:px-6 sm:py-3 rounded-lg
            bg-neutral-800 text-white
            hover:bg-neutral-900 transition
            absolute bottom-10
            border-current
            shadow-2xl
            z-1000
          "
        >
          <ShinyText text="Explore my work" />
          <CircleChevronRight size={18} />
        </Link>
        <div
          className="mt-12"
          style={{ position: "relative", overflow: "hidden" }}
        >
          {/* Basic horizontal loop */}
          <LogoLoop
            logos={techLogos}
            direction="left"
            color="#ffffff"
            gap={40}
            className="[--logoloop-logoHeight:48px] max-sm:[--logoloop-logoHeight:24px]"
            ariaLabel="Technology partners"
          />
        </div>
      </main>
    </section>
  );
};

export default Heropage;
