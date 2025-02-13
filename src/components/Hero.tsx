
'use client'

import { useEffect, useState } from "react";
// import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-rich-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <span className={`block text-sm font-semibold text-gray-400 tracking-widest uppercase mb-4 transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          Welcome to my portfolio
        </span>

        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 transform transition-all duration-700 delay-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          Nico Swan
        </h1>

        <p className={`text-xl sm:text-2xl font-light text-gray-300 mb-8 transform transition-all duration-700 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          Senior Full Stack Software Engineer <br />& Enterprise Systems Architect
        </p>

        <p className={`text-lg text-gray-400 max-w-2xl mx-auto mb-12 transform transition-all duration-700 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          Building robust, scalable solutions with modern technologies and best practices
        </p>

        <button
          onClick={scrollToContent}
          className={`animate-bounce hover:text-red-cmyk text-gray-400 transition-colors duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll down"
        >
          {/* <ArrowDownCircle size={32} /> */}
        </button>
      </div>
    </div>
  );
};

export default Hero;
