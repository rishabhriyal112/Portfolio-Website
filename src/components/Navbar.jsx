import React from "react";

const Navbar = ({ isMenuOpen, setIsMenuOpen, sections, activeSection, scrollToSection }) => {
  return (
    <>
      {/* Wide Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
        <div className="bg-white/40 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-white/50 w-[min(500px,85vw)]">
          <div className="flex items-center justify-between">
            {/* Logo Section - Far Left */}
            <div
              onClick={() => scrollToSection("home")}
              className="cursor-pointer group mr-6"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-100">
                <span className="text-blue-600 font-bold text-sm">RR</span>
              </div>
            </div>
            
            {/* Navigation Section - Centered */}
            <div className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-full capitalize font-medium text-xs transition-all duration-200 ${
                    activeSection === section
                      ? "bg-blue-600 text-white shadow-md font-bold"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full text-black hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 lg:hidden w-[min(280px,85vw)]">
          <div className="bg-white/40 backdrop-blur-md rounded-2xl px-4 py-4 shadow-xl border border-white/50 w-full">
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-xl capitalize font-medium transition-all duration-300 ${
                    activeSection === section
                      ? "bg-blue-600 text-white shadow-lg font-semibold"
                      : "text-black hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
