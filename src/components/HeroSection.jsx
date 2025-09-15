import React from "react";
import Avatar from "./Avatar";
import profileImage from "../assets/images/rishabh01.jpg";
import heroBackground from "../assets/images/hero_background.jpg";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 flex items-center relative overflow-hidden" style={{backgroundImage: `url(${heroBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="text-left space-y-3 md:space-y-4 flex-1 animate-fade-up">
            <div className="space-y-2 md:space-y-3">
              <p className="text-sm md:text-base uppercase tracking-wider text-white/80 font-medium">Hi, I'm</p>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Rishabh Riyal
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                Web Developer & Computer Science Student
              </p>
              <p className="text-sm md:text-base text-white/80 leading-relaxed">
                Building responsive websites with React and modern web technologies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a
                href="./public/Rishabh_Riyal_Resume.pdf"
                download="Rishabh_Riyal_Resume.pdf"
                className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-indigo-200 shadow-2xl overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100">
                <img 
                  src={profileImage} 
                  alt="Rishabh Riyal" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
