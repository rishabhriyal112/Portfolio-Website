import React from "react";

const SectionTitle = ({ children }) => (
  <div className="text-center mb-8 md:mb-12">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      {children}
    </h2>
    <div className="w-16 sm:w-20 h-1 bg-indigo-600 mx-auto rounded"></div>
  </div>
);

export default SectionTitle;