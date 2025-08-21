import React from "react";
import SectionTitle from "./SectionTitle";
import profileImage from "../assets/images/rishabh01.jpg";

const AboutSection = () => {

  return (
    <section id="about" className="py-12 md:py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-1 items-center max-w-4xl mx-auto">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-indigo-200">
                <img 
                  src={profileImage} 
                  alt="Rishabh Riyal" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Web Developer & Computer Science Student</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a Web Developer and B.Tech Computer Science student skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and Git. I enjoy building responsive websites, landing pages, and user interfaces, and have experience with version control, APIs, and debugging.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am currently expanding my skills by learning Node.js, Express.js, MongoDB, and Next.js to become a full-stack developer, while continuously improving through real-world projects.
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