import React, { useState, useEffect, useMemo } from "react";
import SectionTitle from "./components/SectionTitle";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { scrollToSection as scrollToSectionUtil, throttle } from "./utils/scrollUtils";
import { fetchGitHubRepos } from "./utils/githubApi";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const sections = useMemo(
    () => ["home", "about", "skills", "projects", "contact"],
    []
  );

  useEffect(() => {
    const handleScroll = throttle(() => {
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
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const githubProjects = await fetchGitHubRepos();
      setProjects(githubProjects);
      setLoading(false);
    };
    
    loadProjects();
  }, []);

  const scrollToSection = (sectionId) => {
    scrollToSectionUtil(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gray-50 font-sans antialiased">
      <Navbar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />

      <AboutSection />

      {/* Skills Section */}
      <section id="skills" className="py-12 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Technical Skills</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className="bg-indigo-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                Programming Languages
              </h3>
              <div className="space-y-4">
                {[
                  { name: "JavaScript" },
                  { name: "Python" },
                  { name: "HTML & CSS" }
                ].map((skill) => (
                  <div key={skill.name} className="p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Frontend Development */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Frontend Development
              </h3>
              <div className="space-y-4">
                {[
                  { name: "React.js" },
                  { name: "Tailwind CSS" },
                  { name: "Responsive Design" }
                ].map((skill) => (
                  <div key={skill.name} className="p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Tools & Version Control */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                Tools & Version Control
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Git & GitHub" },
                  { name: "VS Code" },
                  { name: "Vite" }
                ].map((skill) => (
                  <div key={skill.name} className="p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Currently Learning */}
            <div className="bg-amber-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Currently Learning
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Node.js" },
                  { name: "MongoDB" },
                  { name: "Express.js" }
                ].map((skill) => (
                  <div key={skill.name} className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      Learning
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Education</SectionTitle>
          
          <div className="space-y-8">
            {/* University */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-blue-600 font-semibold">2022 - Ongoing</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Swami Rama Himalayan University
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">
                    B.Tech Computer Science & Engineering (AI/ML)
                  </p>
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Currently Pursuing
                  </span>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Class 12 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-indigo-600 font-semibold">2022</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    SBM Public School
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">
                    Higher Secondary (PCM)
                  </p>
                  <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    80%
                  </span>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Class 10 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                    <span className="text-gray-600 font-semibold">2020</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    SBM Public School
                  </h3>
                  <p className="text-lg text-gray-600 mb-3">
                    Secondary School
                  </p>
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    72%
                  </span>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 md:py-20 bg-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Interests & Passions</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces with modern frameworks like React",
                icon: "💻",
                color: "bg-blue-50 border-blue-200"
              },
              {
                title: "AI Tools Exploration",
                description: "Discovering and experimenting with cutting-edge AI tools to enhance development workflow",
                icon: "✨",
                color: "bg-purple-50 border-purple-200"
              },
              {
                title: "Tech Innovation",
                description: "Exploring emerging technologies and trends in the rapidly evolving tech landscape",
                icon: "🚀",
                color: "bg-emerald-50 border-emerald-200"
              },
              {
                title: "Learning New Tech",
                description: "Staying updated with latest technologies and continuously expanding my skill set",
                icon: "📚",
                color: "bg-orange-50 border-orange-200"
              },
              {
                title: "Creative Projects",
                description: "Building unique and innovative projects that combine creativity with technical skills",
                icon: "💡",
                color: "bg-green-50 border-green-200"
              },
              {
                title: "Web Design",
                description: "Designing clean and modern user experiences with attention to detail and usability",
                icon: "🎨",
                color: "bg-pink-50 border-pink-200"
              }
            ].map((interest, index) => (
              <div key={index} className={`${interest.color} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{interest.title}</h3>
                </div>
                <p className="text-gray-600 text-center leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 md:py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionTitle>Projects</SectionTitle>
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
                <p className="mt-4 text-gray-600">Loading projects...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-20 bg-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Certifications</SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "React & JavaScript",
                provider: "30 Days of Code",
                description: "Modern web development with React and JavaScript",
                icon: "⚛️",
                color: "bg-blue-500",
                link: "https://30dc.graphy.com/verify-certificate?serialno=45O72IZ7"
              },
              {
                title: "Generative AI",
                provider: "LinkedIn Learning",
                description: "AI applications in modern technology",
                icon: "🤖",
                color: "bg-purple-500",
                link: "https://www.linkedin.com/learning/certificates/0a8cc45f94735c92da65f24f3323ce10f2bdfee2f3dd8dfb81f2c015a04c5f5d"
              },
              {
                title: "Data Visualization",
                provider: "Forage",
                description: "Professional data visualization techniques",
                icon: "📊",
                color: "bg-indigo-500",
                link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_wKZpaQJ4n7JMS8kTp_1733334247307_completion_certificate.pdf"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white text-2xl">{cert.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">{cert.provider}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                </div>
                
                <div className="text-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 ${cert.color} text-white rounded-lg hover:opacity-90 transition-all duration-200 font-medium`}
                  >
                    <span>View Certificate</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
