import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "./index.css";
import { useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      easing: "ease-out-cubic",
      once: true, // animate only once
      offset: 100, // trigger point
    });
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "black" : "white";
  }, [theme]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
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
