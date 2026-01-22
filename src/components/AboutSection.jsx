import React from "react";
import SectionTitle from "./SectionTitle";
import profileImage from "../assets/images/rishabh02.jpg";

const AboutSection = () => {

  return (
    <section id="about" className="py-12 md:py-20 bg-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              <div className="max-w-md w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-indigo-200">
                <img 
                  src={profileImage} 
                  alt="Rishabh Riyal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Web Developer & ML Engineer | Computer Science Student</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a Web Developer and ML Engineer pursuing B.Tech Computer Science with expertise in both frontend development and machine learning. On the web development side, I'm skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, building responsive websites and user interfaces. In machine learning, I work with Python, TensorFlow, and deep learning models for data analysis and AI applications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I am currently expanding my skills by learning Node.js, Express.js, MongoDB for full-stack development, while also advancing in machine learning with deep learning techniques, neural networks, and AI model deployment. I enjoy combining both domains to create intelligent web applications.
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
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Machine Learning (Proficient)</h4>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
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
