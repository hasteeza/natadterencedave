import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
<<<<<<< HEAD
=======
import Heropage from "./pages/Heropage";
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "./index.css";
import { useTheme } from "./contexts/ThemeContext";
import { useHeroBg } from "./contexts/HeroBgContext";

function AppContent() {
  const location = useLocation();
  const { theme } = useTheme();
  const { heroBgColor } = useHeroBg();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      easing: "ease-out-cubic",
      once: true, // animate only once
      offset: 100, // trigger point
    });
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = heroBgColor;
    } else if (location.pathname === "/home") {
      document.body.style.backgroundColor =
        theme === "dark" ? "black" : "white";
    }
  }, [location.pathname, theme, heroBgColor]);

  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Homepage />} />
=======
      <Route path="/" element={<Heropage />} />
      <Route path="/home" element={<Homepage />} />
>>>>>>> 5e12ddbbce4cc12a524e274adbfa51c300735d1a
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
