import React from "react";

const SectionTitle = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
      {children}
    </h2>
    <div className="w-20 h-1 bg-emerald-600 mx-auto rounded"></div>
  </div>
);

export default SectionTitle;