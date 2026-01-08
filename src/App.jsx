import { React, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heropage from "./pages/Heropage";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "./index.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      easing: "ease-out-cubic",
      once: true, // animate only once
      offset: 100, // trigger point
    });
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Heropage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
