import React, { useEffect, useState } from "react";
import { IoPeople } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { recommendations } from "../data/recommendationsData";

const RecommendationCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = recommendations.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 10000);

    return () => clearInterval(interval);
  }, [total]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Title */}
      <div className="inline-flex items-center gap-2 mb-4">
        <IoPeople />
        <h2 className="text-xl font-bold">Recommendations</h2>
      </div>

      {/* Slideshow */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            layout
          >
            <p className="text-sm mb-4 italic leading-relaxed">
              “{recommendations[currentIndex].text}”
            </p>

            <div className="border border-gray-200 my-3"></div>

            <h3 className="font-semibold">
              {recommendations[currentIndex].name}
            </h3>
            <p className="text-xs opacity-70">
              {recommendations[currentIndex].role},{" "}
              {recommendations[currentIndex].company}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stepper dots */}
      <div className="flex flex-wrap mt-6 gap-2">
        {recommendations.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 transition-all duration-300 ${
              index === currentIndex ? "bg-gray-400 scale-125" : "bg-gray-300"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationCard;
