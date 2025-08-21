import React from "react";
import Avatar from "./Avatar";
import profileImage from "../assets/images/rishabh01.jpg";

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen pt-12 flex items-center bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Text Content */}
          <div className="text-left space-y-6 order-2 md:order-1 animate-fade-up">
            <div className="space-y-4">
              <p className="text-lg uppercase tracking-wider text-gray-500 font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-500 leading-tight">
                Rishabh Riyal
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Full-Stack Developer specializing in modern web applications
              </p>
              <p className="text-gray-500 leading-relaxed">
                Crafting seamless user experiences with cutting-edge technologies and clean architecture.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1Zt6n3zEtDYPniMcOgRHkLiWB7cK1SJFr"
                download="Rishabh_Riyal_Resume.pdf"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-emerald-200 shadow-2xl overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100">
                <img 
                  src={profileImage} 
                  alt="Rishabh Riyal" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Status dot */}
              <div className="absolute bottom-6 right-6 w-6 h-6 bg-emerald-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;