import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "aos/dist/aos.css";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { HeroBgProvider } from "./contexts/HeroBgContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <HeroBgProvider>
        <App />
      </HeroBgProvider>
    </ThemeProvider>
  </StrictMode>
);
