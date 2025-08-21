import React from "react";
import SectionTitle from "./SectionTitle";
import profileImage from "../assets/images/rishabh01.jpg";

const AboutSection = () => {

  return (
    <section id="about" className="py-20 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-100 to-emerald-200">
                <img 
                  src={profileImage} 
                  alt="Rishabh Riyal" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available for work</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Frontend Developer & Aspiring Full-Stack</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a passionate web developer with strong expertise in frontend technologies. I create responsive, 
                user-friendly interfaces using React, JavaScript, and modern CSS frameworks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently expanding my skills by learning backend development to become a full-stack developer. 
                I'm focused on mastering server-side technologies and database management to build complete web applications.
              </p>
            </div>
            
            {/* Skills Tags */}
            <div className="space-y-3 pt-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Frontend (Proficient)</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Backend (Learning)</h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'MongoDB', 'Express.js'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;