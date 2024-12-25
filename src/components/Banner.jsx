import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  const [currentSvgIndex, setCurrentSvgIndex] = useState(0);

  const svgFiles = [
    './banner1.svg',
    './banner3.svg',
    './banner2.svg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSvgIndex((prevIndex) => (prevIndex + 1) % svgFiles.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, [svgFiles.length]);

  const handleExploreJobs = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <section className="relative mt-10 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-70 h-screen"></div>

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>

      <div className="max-w-screen-2xl h-[100vh] container mx-auto xl:px-24 px-4">
        <div className="relative pt-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in">
                Find your{" "}
                <span className="text-green inline-block animate-bounce-slow">
                  dream job
                </span>{" "}
                today
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Discover thousands of opportunities in tech, engineering, and
                digital sectors. Your next career move is just a click away.
              </p>

              {/* Stats section */}
              <div className="flex flex-wrap justify-between gap-4 pt-4 pb-8">
                {[
                  { count: "10k+", label: "Jobs Listed" },
                  { count: "8k+", label: "Companies" },
                  { count: "15k+", label: "Candidates" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-green">{stat.count}</p>
                    <p className="text-sm sm:text-base text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Enhanced Explore Jobs button */}
              <button
                onClick={handleExploreJobs}
                className="explore-jobs-btn bg-green text-white text-lg sm:text-xl font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label="Explore Jobs"
              >
                Explore Jobs
                <span className="ml-2 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1" aria-hidden="true">→</span>
              </button>
            </div>

            {/* SVG Illustration Carousel */}
            <div className="relative w-full h-0 pb-[100%] lg:pb-[75%] ml-[25%]">
              {svgFiles.map((file, index) => (
                <img
                  key={index}
                  src={file}
                  alt={`Illustration ${index + 1}`}
                  className={`absolute inset-0 w-1/2 h-full object-contain transition-opacity duration-1000 ${index === currentSvgIndex ? "opacity-100" : "opacity-0"
                    }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Company Logos */}
          <div className="mt-28 overflow-hidden">
            <div className="logos-slide flex animate-slide">
              {[
                "adobe", "coinbase", "atlassian", "github",
                "microsoft", "google", "stripe", "spotify"
              ].map((company, index) => (
                <img
                  key={index}
                  src={`./logos/${company}.png`}
                  alt={`${company} logo`}
                  className="h-12 mx-4 object-contain"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Banner);
