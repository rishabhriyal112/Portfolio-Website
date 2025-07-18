import React, { useState, useEffect, useMemo } from "react";

const Avatar = () => {
  // Import the image
  const profilePic = new URL("./assets/rishabh01.jpg", import.meta.url).href;

  return (
    <div className="relative w-36 h-36 sm:w-48 sm:h-48 mx-auto group">
      <div className="w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
        <img
          src={profilePic}
          alt="Rishabh Riyal"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-full group-hover:bg-indigo-700 transition-colors duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <div className="relative inline-block">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-16">
      {children}
      <div className="absolute -bottom-4 left-0 w-2/3 h-2 bg-indigo-600 transform -skew-x-12 group-hover:w-full transition-all duration-300"></div>
    </h2>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = useMemo(
    () => ["home", "about", "skills", "projects", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 font-sans antialiased">
      {/* Navbar - improved with backdrop blur and smooth transitions */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 space-x-4">
            {/* Logo */}
            <div
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-[2px] shadow-lg transform group-hover:scale-105 transition-transform duration-200">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                    <span
                      className="text-base font-extrabold font-graffiti bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-purple-600"
                      style={{
                        textShadow: "2px 2px 4px rgba(99, 102, 241, 0.2)",
                        fontFamily: "'Urban Graffiti', sans-serif",
                        letterSpacing: "0px",
                      }}
                    >
                      RR
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-200"></div>
              </div>
              <div>
                <span
                  className="text-lg font-bold text-gray-800 tracking-wide"
                  style={{
                    fontFamily: "'Urban Graffiti', sans-serif",
                    background: "linear-gradient(to right, #4F46E5, #7C3AED)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0px 2px 4px rgba(99, 102, 241, 0.2)",
                  }}
                >
                  Rishabh Riyal
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center space-x-6">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-800 hover:text-indigo-600 capitalize font-medium transition-colors duration-300 px-3 py-2 text-base
                    ${
                      activeSection === section
                        ? "text-indigo-600 border-b-2 border-indigo-600"
                        : ""
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-800 hover:text-indigo-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white shadow-md ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full px-3 py-3 text-left text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 capitalize"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-16 flex items-center relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center space-y-8 animate-fade-in order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
                <span className="block">Hi, I'm</span>
                <span className="block text-indigo-600 mt-2">
                  Rishabh Riyal
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
                Frontend Developer skilled in creating responsive and
                interactive web interfaces using React.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 text-center"
                >
                  View My Work
                </button>
                <a
                  href="https://drive.google.com/uc?export=download&id=1Zt6n3zEtDYPniMcOgRHkLiWB7cK1SJFr"
                  download="Rishabh_Riyal_Resume.pdf"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-medium hover:bg-indigo-50 transform hover:scale-105 transition-all duration-200 text-center"
                >
                  Download CV
                </a>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8">
                <a
                  href="https://github.com/rishabhriyal112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.5c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rishabh-riyal-6a1567323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:riyalrishabh22@gmail.com"
                  className="text-gray-600 hover:text-indigo-600 transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <Avatar />
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>About Me</SectionTitle>
            <div className="mt-10 text-xl text-gray-600 max-w-4xl mx-auto space-y-8 bg-white rounded-2xl shadow-xl p-6 sm:p-12 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <p>
                Hi, I'm Rishabh. I'm a frontend web developer who enjoys creating clean and responsive websites. I work with tools like HTML, CSS, JavaScript, React, and Tailwind CSS. I like building websites that look good and work well on all devices. I'm always trying to learn new things and improve my skills by working on real-world projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Skills</SectionTitle>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 justify-items-center">
              {[
                {
                  name: "React",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-3 text-blue-500"
                    >
                      <path
                        fill="currentColor"
                        d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.02 2.77c.64-.35 2.02.23 3.59 1.7-.52.59-1.03 1.23-1.51 1.9-.82.08-1.63.2-2.4.36-.51-2.14-.32-3.61.32-3.96z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "JavaScript",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-3 text-yellow-400"
                    >
                      <path
                        fill="currentColor"
                        d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Python",
                  icon: (
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                      alt="Python"
                      className="w-8 h-8 mb-3"
                    />
                  ),
                },
                {
                  name: "Redux",
                  icon: (
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                      alt="Redux"
                      className="w-8 h-8 mb-3"
                    />
                  ),
                },
                {
                  name: "HTML/CSS",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-3 text-orange-500"
                    >
                      <path
                        fill="currentColor"
                        d="M12 17.56L16.07 16.43L16.62 10.33H9.38L9.2 8.3H16.8L17 6.31H7L7.56 12.32H14.45L14.22 14.9L12 15.5L9.78 14.9L9.64 13.24H7.64L7.93 16.43L12 17.56M4.07 3H19.93L18.5 19.2L12 21L5.5 19.2L4.07 3Z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Tailwind CSS",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-3 text-cyan-500"
                    >
                      <path
                        fill="currentColor"
                        d="M12 6C9.33 6 7.33 7.33 6 10C7.33 8.67 8.67 8 10 8C10.73 8 11.67 8.5 12 9C12.67 10 13.33 11 15 11C17.67 11 19.67 9.67 21 7C19.67 8.33 18.33 9 17 9C16.27 9 15.33 8.5 15 8C14.33 7 13.67 6 12 6M12 13C9.33 13 7.33 14.33 6 17C7.33 15.67 8.67 15 10 15C10.73 15 11.67 15.5 12 16C12.67 17 13.33 18 15 18C17.67 18 19.67 16.67 21 14C19.67 15.33 18.33 16 17 16C16.27 16 15.33 15.5 15 15C14.33 14 13.67 13 12 13Z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "Git",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-3 text-red-500"
                    >
                      <path
                        fill="currentColor"
                        d="M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z"
                      />
                    </svg>
                  ),
                },
                {
                  name: "REST APIs",
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 mb-3 text-purple-500"
                    >
                      <path
                        fill="currentColor"
                        d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                      />
                    </svg>
                  ),
                },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-3 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group w-full"
                >
                  <div className="flex flex-col items-center">
                    {skill.icon}
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Education</SectionTitle>
            <div className="mt-10 relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-0 top-0 h-full w-1 bg-indigo-200"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {/* University */}
                <div className="relative">
                  <div className="hidden md:block absolute left-0 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                  </div>
                  <div className="md:ml-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-indigo-600 text-lg font-semibold">
                        2020 - 2026
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mt-3">
                        Swami Rama Himalayan University
                      </h3>
                      <p className="text-xl text-gray-600 mt-3">
                        B.Tech CSE with AI/ML
                      </p>
                      <div className="mt-4 inline-block px-4 py-2 bg-indigo-50 rounded-full">
                        <span className="text-indigo-600 font-medium">
                          Current
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Class 12 */}
                <div className="relative">
                  <div className="hidden md:block absolute left-0 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                  </div>
                  <div className="md:ml-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-indigo-600 text-lg font-semibold">
                        Class 12
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 mt-3">
                        SBM Public School
                      </h3>
                      <p className="text-xl text-gray-600 mt-3">PCM</p>
                      <div className="mt-4 inline-block px-4 py-2 bg-indigo-50 rounded-full">
                        <span className="text-indigo-600 font-medium">80%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Class 10 */}
                <div className="relative">
                  <div className="hidden md:block absolute left-0 -mt-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 border-4 border-white shadow"></div>
                  </div>
                  <div className="md:ml-12">
                    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <span className="text-indigo-600 text-lg font-semibold">
                        Class 10
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800 mt-3">
                        SBM Public School
                      </h3>
                      <div className="mt-4 inline-block px-4 py-2 bg-indigo-50 rounded-full">
                        <span className="text-indigo-600 font-medium">72%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Interests</SectionTitle>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Building Modern Websites
                  </h3>
                  <p className="text-gray-600">
                    Passionate about creating interactive UI experiences with
                    React.js and integrating ML models into web applications.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Developing and Training ML Models
                  </h3>
                  <p className="text-gray-600">
                    Enthusiastic about implementing machine learning algorithms
                    and exploring new AI technologies.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Participating in Coding Contests
                  </h3>
                  <p className="text-gray-600">
                    Regular participant in hackathons and coding competitions to
                    enhance problem-solving skills.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Tech Blogging & Learning New Frameworks
                  </h3>
                  <p className="text-gray-600">
                    Sharing knowledge through technical writing and continuously
                    exploring emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Projects</SectionTitle>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {[
                {
                  title: "E-Commerce Platform",
                  description:
                    "Built An e-commerce website enables users to browse, search, and purchase products online through a digital storefront. It typically includes features like a homepage , product listings , shopping cart , and checkout process . Frontend-only e-commerce sites focus on user experience and UI interactivity using technologies like ReactJS and Tailwind CSS",
                  image:
                    "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg",
                  tags: ["React", "Vite", "Tailwind CSS"],
                  link: "https://github.com/rishabhriyal12",
                },
                {
                  title: "Diabetic Retinopathy Detection",
                  description:
                    "Built a ML model using TensorFlow to detect diabetic retinopathy from retinal images.Implemented a complete image preprocessing pipeline including resizing, normalization, and augmentation.Trained and evaluated the model on labeled datasets, achieving high classification accuracy across severity levels",
                  image:
                    "https://images.pexels.com/photos/4124335/pexels-photo-4124335.jpeg",
                  tags: [
                    "Python",
                    "TensorFlow",
                    "Image Processing",
                    "Deep Learning",
                  ],
                  link: "https://github.com/rishabhriyal112/Diabetic-Retinopathy-Detection",
                },
                {
                  title: "Creation Ground",
                  description:
                    "Built a no-code ML platform using Streamlit for data upload, model training, and result export.Integrated automated EDA, feature engineering, and support for multiple classification and regression algorithms.Provided an interactive, deployable interface with support for CSV/JSON datasets and manual hyperparameter tuning.",
                  image:
                    "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
                  tags: [
                    "Python",
                    "Streamlit",
                    "Machine Learning",
                    "Data Science",
                  ],
                  link: "https://creation-ground.streamlit.app/",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  </div>
                  <div className="p-4 sm:p-6 flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-left">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-3 text-center bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transform hover:scale-[1.02] transition-all duration-200"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Certifications</SectionTitle>
            <div className="mt-10 max-w-2xl mx-auto space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D560BAQGIQ93_d1dKOg/company-logo_100_100/company-logo_100_100/0/1713978749911?e=1755129600&v=beta&t=4KUjQtKn547LET_Rye7WioewvIY6iCKrWqtQCOvenK0"
                        alt="30 Days of JavaScript"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      React & JavaScript
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Comprehensive certification in modern web development with
                      React and JavaScript.
                    </p>
                    <a
                      href="https://30dc.graphy.com/verify-certificate?serialno=45O72IZ7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <span>View Certificate</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src="https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_100_100/company-logo_100_100/0/1638831590218/linkedin_logo?e=1755129600&v=beta&t=g0yMse-IYp2lX--40q4QkQpDJTR2kGLRdOw0hObXLIg"
                        alt="LinkedIn Learning"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Generative AI
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Advanced certification in Generative AI and its
                      applications in modern technology.
                    </p>
                    <a
                      href="https://www.linkedin.com/learning/certificates/0a8cc45f94735c92da65f24f3323ce10f2bdfee2f3dd8dfb81f2c015a04c5f5d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <span>View Certificate</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D560BAQEhb_j1_sDRJQ/company-logo_100_100/company-logo_100_100/0/1720817595519/theforage_logo?e=1755129600&v=beta&t=oWtu4pvPuOhooxqb_j2PiA87lCOYaCmsbVM1EIos2wQ"
                        alt="Forage"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Data Visualization
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Professional certification in data visualization
                      techniques and best practices.
                    </p>
                    <a
                      href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_wKZpaQJ4n7JMS8kTp_1733334247307_completion_certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                      <span>View Certificate</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Get in Touch</SectionTitle>
            <div className="mt-10 max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors duration-200"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-12 flex justify-center space-x-6">
                <a
                  href="https://github.com/rishabhriyal112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 7.5c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rishabh-riyal-6a1567323/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:riyalrishabh22@gmail.com"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-200"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
