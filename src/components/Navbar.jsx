import React from "react";

const Navbar = ({ isMenuOpen, setIsMenuOpen, sections, activeSection, scrollToSection }) => {
  return (
    <>
      {/* Wide Floating Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-gray-100 min-w-[600px]">
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
            <div className="hidden md:flex items-center space-x-2 flex-1 justify-center">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-full capitalize font-medium text-xs transition-all duration-200 ${
                    activeSection === section
                      ? "bg-blue-600 text-white shadow-md font-bold"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-100/60 transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-xl border border-white/30 min-w-[250px]">
            <div className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 rounded-xl capitalize font-medium transition-all duration-300 ${
                    activeSection === section
                      ? "bg-blue-600 text-white shadow-lg font-semibold"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-100/60"
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