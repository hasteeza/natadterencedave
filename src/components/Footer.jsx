import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();
  console.log("Footer theme:", theme);

  return (
    <section
      className={`max-w-4xl mx-auto px-4 py-8 border-t mt-12 ${
        theme === "dark" ? "border-[#222222]" : "border-[#F3F4F6]"
      }`}
    >
      <div className="flex items-center justify-center">
        <p className="text-sm text-foreground">
          © 2026 Terence Dave Natad. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
