import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;